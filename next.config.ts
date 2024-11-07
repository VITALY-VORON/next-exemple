import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Настройка окружения
  env: {
    SITE_NAME: process.env.SITE_NAME,
    SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL
  },

  // Международализация (i18n)
  i18n: {
    locales: ['ru', 'en'], // доступные языки
    defaultLocale: 'ru',   // язык по умолчанию
    localeDetection: false, // автоматическое определение языка по предпочтениям пользователя
  },

  // Включение строгого режима React для разработки
  reactStrictMode: true,

  // Прочие настройки
  images: {
    domains: ['example.com'], // разрешаем загрузку изображений только с этого домена
  },

  // Настройки для статического экспорта
  output: 'standalone', // позволяет генерировать полностью автономное приложение

  // Прочие настройки
  compiler: {
    styledComponents: true, // включение поддержки для styled-components
  },

  // Дополнительные настройки маршрутизации (например, переадресации)
  redirects: async () => [
    {
      source: '/old-url',
      destination: '/new-url',
      permanent: true, // перенаправление на постоянной основе
    },
  ],

  // Настройка промежуточного ПО (middleware)
  // middleware: ['/dashboard'], // middleware применяется только для маршрутов '/dashboard'
};

export default nextConfig;
