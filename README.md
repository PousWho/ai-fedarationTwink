# Aimy Speech Analytics Landing

## Технологии

- **Next.js 16.4.3**
- **React 19**
- **TypeScript** 
- **Tailwind CSS**  

## Структура проекта

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Корневой layout с метаданными
│   ├── page.tsx                 # Главная страница
│   └── globals.css              # Глобальные стили и шрифты
├── components/                   # React компоненты
│   ├── LandingAimy.tsx          # Основной компонент лендинга
│   ├── layout/                  # Компоненты макета
│   │   ├── Header.tsx          # Шапка сайта с навигацией
│   │   └── Footer.tsx          # Подвал сайта
│   ├── sections/                # Секции лендинга
│   │   ├── HeroSection.tsx     # Главная секция с заголовком
│   │   ├── TasksSection.tsx     # Секция с задачами компаний
│   │   ├── AboutSection.tsx     # О системе
│   │   ├── FeaturesSection.tsx  # Возможности системы
│   │   ├── HowItWorksSection.tsx # Как работает система
│   │   ├── PricingSection.tsx   # Стоимость
│   │   ├── FAQSection.tsx       # Часто задаваемые вопросы
│   │   ├── CTASection.tsx       # Призыв к действию
│   │   ├── ContactSection.tsx   # Форма обратной связи
│   │   └── SectionDivider.tsx   # Разделитель секций
│   └── ui/                      # UI Kit компоненты
│       ├── Button.tsx           # Кнопка
│       ├── Bubble.tsx           # Рамка с границей
│       ├── OpportunityCard.tsx  # Карточка возможности
│       ├── Field.tsx            # Поле ввода
│       ├── Textarea.tsx         # Текстовое поле
│       ├── Icon.tsx             # Иконка
│       ├── Logo.tsx             # Логотип
│       └── TelegramIcon.tsx     # Иконка Telegram
├── lib/                         # Утилиты и константы
│   ├── constants.ts            # Константы (навигация, FAQ, фичи)
│   └── utils.ts                # Утилиты (cn функция)
├── public/                      # Статические файлы
│   ├── fonts/                  # Шрифты
│   │   ├── Bounded-Regular.ttf # Шрифт для заголовков
│   │   └── Guidy.ttf           # Шрифт для текста
│   └── images/                 # Изображения
│       ├── 3b4ad5545599398306029ebdf33a9b5b082aff50.png # Логотип
│       ├── 9d758133354647b4de6ba7d09a4ce388f3b4d4c6.png # Фон формы
│       └── icon-*.png          # Иконки возможностей
├── tailwind.config.ts           # Конфигурация Tailwind CSS
├── tsconfig.json               # Конфигурация TypeScript
└── package.json                # Зависимости проекта
```


## Скрипты

- `npm run dev` - Запуск dev-сервера
- `npm run build` - Сборка для продакшена
- `npm start` - Запуск production сервера
- `npm run lint` - Проверка кода линтером

## Конфигурация

### Tailwind CSS

Конфигурация Tailwind находится в `tailwind.config.ts` и включает:
- Кастомные цвета дизайн-системы
- Настройки шрифтов (Bounded, Guidy)
- Кастомные размеры шрифтов
- Utility классы

### TypeScript

Конфигурация TypeScript в `tsconfig.json` настроена для:
- Строгой типизации
- Поддержки Next.js
- Путей импорта (@/components, @/lib)

