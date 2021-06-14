console.log(process.env);

export default {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  env: {
    API_URL: process.env.API_URL
  }
};
