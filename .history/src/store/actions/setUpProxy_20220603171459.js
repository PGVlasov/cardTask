const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("https://bonus.evotor.tech/api/3rdparty/card", {
      target: "https://bonus.evotor.tech",
      secure: false,
      changeOrigin: true,
    })
  );
};
