module.exports = ({ env }) => {
  const conf = {
    proxy: true,
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
    url: env("STRAPI_URL"),
  };

  console.log("Server config:", conf);

  return conf;
};
