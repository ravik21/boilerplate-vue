const path = require('path');
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    configureWebpack: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, 'src/')
        }
      }
    }
};
