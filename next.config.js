/** @type {import('next').NextConfig} */

// Два режима сборки:
//  - обычный (Vercel/свой сервер): полноценное приложение с /api/contact и security-заголовками
//  - GITHUB_PAGES=true: статический экспорт для github.io/ai-fedarationTwink
//    (заголовки на Pages не применяются, API-роут в CI удаляется перед сборкой — см. deploy.yml)
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoBase = '/ai-fedarationTwink';

const isDev = process.env.NODE_ENV === 'development';

// В dev-режиме webpack/HMR требуют 'unsafe-eval', в проде он не нужен
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'" + (isDev ? ' ws:' : ''),
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const nextConfig = isGitHubPages
  ? {
      output: 'export',
      basePath: repoBase,
      assetPrefix: `${repoBase}/`,
      trailingSlash: true,
      // unoptimized обходит кастомный loader, поэтому только loader:
      // он и префиксует src basePath'ом, и удовлетворяет требованиям output: 'export'
      images: { loader: 'custom', loaderFile: './lib/image-loader.js' },
    }
  : {
      async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              { key: 'Content-Security-Policy', value: csp },
              { key: 'X-Content-Type-Options', value: 'nosniff' },
              { key: 'X-Frame-Options', value: 'DENY' },
              { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
              { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
            ],
          },
        ];
      },
    };

module.exports = nextConfig;
