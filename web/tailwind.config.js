module.exports = {
  // mode: "jit",
  purge: [
    "./public/**/*.html",
    "./public/**/*.css",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
