export default {
  mount: {
    public: { url: "/", static: false },
    src: { url: "/dist" },
  },
  env: {
    API_URL: process.env.API_URL || "http://example.com",
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  plugins: ["@snowpack/plugin-postcss"],
};
