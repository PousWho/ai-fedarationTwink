import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Aimy',
  description: 'Политика обработки персональных данных платформы речевой аналитики Aimy',
  robots: { index: false, follow: false },
};

// ВНИМАНИЕ: это структурный черновик. Перед публикацией текст должен проверить юрист,
// а плейсхолдеры в квадратных скобках — заменить реальными реквизитами компании.
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-aimy-background text-aimy-text-white">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <Link href="/" className="text-aimy-accent text-small font-guidy hover:opacity-80 transition-opacity">
          ← На главную
        </Link>

        <h1 className="text-heading font-bounded mt-8 mb-4">Политика конфиденциальности</h1>

        <div className="mb-8 border border-aimy-accent/50 bg-aimy-accent/10 rounded-[12px] p-4">
          <p className="text-small font-guidy">
            Черновик документа. Текст требует проверки юристом и заполнения реквизитов
            оператора персональных данных перед публикацией.
          </p>
        </div>

        <div className="space-y-6 text-text font-guidy leading-relaxed">
          <section>
            <h2 className="text-subheading font-bounded mb-2">1. Общие положения</h2>
            <p>
              Настоящая политика обработки персональных данных составлена в соответствии с требованиями
              Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок
              обработки персональных данных и меры по обеспечению безопасности персональных данных,
              предпринимаемые [НАИМЕНОВАНИЕ ЮРИДИЧЕСКОГО ЛИЦА, ИНН, ОГРН, АДРЕС] (далее — Оператор).
            </p>
          </section>

          <section>
            <h2 className="text-subheading font-bounded mb-2">2. Какие данные мы обрабатываем</h2>
            <p>
              Через форму обратной связи на сайте Оператор получает: имя, номер телефона, адрес
              электронной почты и текст обращения.
            </p>
          </section>

          <section>
            <h2 className="text-subheading font-bounded mb-2">3. Цели обработки</h2>
            <p>
              Данные используются исключительно для связи с отправителем обращения: консультации по
              продукту, подготовки коммерческого предложения и организации демонстрации системы.
            </p>
          </section>

          <section>
            <h2 className="text-subheading font-bounded mb-2">4. Правовые основания</h2>
            <p>
              Обработка осуществляется на основании согласия субъекта персональных данных, выражаемого
              отметкой в соответствующем поле формы перед отправкой обращения.
            </p>
          </section>

          <section>
            <h2 className="text-subheading font-bounded mb-2">5. Хранение и защита</h2>
            <p>
              Данные хранятся на серверах, расположенных на территории Российской Федерации, в течение
              [СРОК ХРАНЕНИЯ]. Доступ к данным имеют только уполномоченные сотрудники Оператора.
            </p>
          </section>

          <section>
            <h2 className="text-subheading font-bounded mb-2">6. Права субъекта данных</h2>
            <p>
              Вы вправе запросить сведения об обработке ваших данных, потребовать их уточнения или
              удаления, а также отозвать согласие на обработку, направив запрос на
              [EMAIL ДЛЯ ОБРАЩЕНИЙ ПО ПДн].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
