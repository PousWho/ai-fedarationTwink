import { NextRequest, NextResponse } from 'next/server';

const MAX_LENGTHS = { name: 200, phone: 50, email: 254, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Примитивный rate-limit в памяти процесса: до 5 заявок в 10 минут с одного IP.
// При нескольких инстансах/serverless-холодных стартах счётчик сбрасывается —
// для продакшена нужен внешний стор (Redis/Upstash).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(ts => now - ts < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: поле скрыто от людей, боты его заполняют
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (
    !name || name.length > MAX_LENGTHS.name ||
    !phone || phone.length > MAX_LENGTHS.phone ||
    !email || email.length > MAX_LENGTHS.email || !EMAIL_RE.test(email) ||
    !message || message.length > MAX_LENGTHS.message
  ) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 });
  }

  // TODO: подключить реальную доставку заявки — SMTP, Telegram-бот или CRM.
  // Пока заявка только логируется на сервере, чтобы форма не отправляла данные «в никуда» молча.
  console.log('[contact] заявка:', { name, phone, email, message, ip, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
