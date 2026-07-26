// Лоадер для статического экспорта на GitHub Pages:
// с images.unoptimized next/image не добавляет basePath к src сам,
// поэтому префиксуем вручную (NEXT_PUBLIC_BASE_PATH задаётся в deploy.yml)
export default function imageLoader({ src }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return src.startsWith('/') ? `${basePath}${src}` : src;
}
