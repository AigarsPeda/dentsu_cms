module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      config: {
        origin: "*", // Adjust this as needed to specify allowed origins
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        headers: ["Content-Type", "Authorization"],
      },
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
