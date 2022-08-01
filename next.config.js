/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const language = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = { nextConfig, language };
