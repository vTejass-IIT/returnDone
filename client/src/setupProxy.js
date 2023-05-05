const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    'api/Email/SendEmail',
    createProxyMiddleware({
      target: 'https://emailsapi.azurewebsites.net/',
      changeOrigin: true,
    })
  );
};