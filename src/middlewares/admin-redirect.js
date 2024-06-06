module.exports = (_config, { strapi }) => {
  const redirects = ["/", "/index.html"].map((path) => {
    return {
      method: "GET",
      path,
      handler: (ctx) => ctx.redirect("/strapi/admin/"),
      config: { auth: false },
    };
  });

  strapi.server.routes(redirects);
};
