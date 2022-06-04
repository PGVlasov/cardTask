const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/cards", {
      target: "https://bonus.evotor.tech/api/3rdparty/card",
      changeOrigin: true,
    })
  );
};
