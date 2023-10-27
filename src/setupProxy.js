const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Define the path you want to proxy
    createProxyMiddleware({
      target: 'https://dev.api.goongoonalo.com', // Replace with the actual API URL
      changeOrigin: true,
    })
  );
};
