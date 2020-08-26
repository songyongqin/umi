import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:false,
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
  // proxy: {
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
});

