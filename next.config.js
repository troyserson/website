const webpack = require('webpack');

module.exports = {
  i18n: {
    // specifies lang attribute
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  async redirects() {
    return [
      { source: '/login', destination: '/', permanent: true },
      { source: '/new-students/', destination: '/', permanent: true },
      { source: '/about-troy-serson/', destination: '/', permanent: true },
      { source: '/beginner-guitar-choices/', destination: '/', permanent: true },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // enables client-side WebSockets
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return config;
  },
}