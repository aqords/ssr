/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const headers = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Cache-Control",
    value: "public, s-maxage=36000, stale-while-revalidate=36000",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN ",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

const nextConfig = {
  images: {
    domains: ["dev.qoobus.com", "qoobus.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mc.yandex.ru",
        port: "",
        pathname: "/watch/**",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
  env: {
    API: process.env.API,
    VERSION_NUMBER: process.env.VERSION_NUMBER,
  },
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx,css,scss}",
          "./components/**/*.{js,jsx,ts,tsx,css,scss}",
          "./styles/*.{css,scss}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"],
      },
    ],
  ],
  async redirects() {
    return [
      {
        source: "/customs",
        destination: "/search/customs",
        permanent: true,
      },
      {
        source: "/customs/:path*",
        destination: "/search/customs/:path*",
        permanent: true,
      },
      {
        source: "/:locale/search-load",
        destination: "/auth?lang=:locale",
        permanent: true,
        locale: false,
      },
      {
        source: "/:locale/search-transport",
        destination: "/auth?lang=:locale",
        permanent: true,
        locale: false,
      },
      {
        source: "/:locale/academy",
        destination: "/auth?lang=:locale",
        permanent: false,
        locale: false,
      },
      {
        source: "/:locale/news",
        destination: "/auth?lang=:locale",
        permanent: false,
        locale: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers,
      },
    ];
  },
  i18n: i18n,
};

module.exports = nextConfig;
