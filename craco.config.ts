/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

const resolvePath = (p: string) => path.resolve(__dirname, p);
module.exports = {
  webpack: {
    alias: {
      '@': resolvePath('src'),
      '@components': resolvePath('src/components'),
      '@hooks': resolvePath('src/hooks'),
      '@constants': resolvePath('src/constants'),
      '@utils': resolvePath('src/utils')
    }
  }
};
