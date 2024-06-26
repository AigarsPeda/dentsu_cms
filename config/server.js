module.exports = ({ env }) => {
  const conf = {
    proxy: true,
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
    url: env("STRAPI_URL"),

    // webhooks: {
    //   populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    // },
  };

  return conf;
};
