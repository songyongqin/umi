import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:false,
  // mock:false,
  base: '/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
  // dynamicImport: {
  //   loading: '@/components/loading',
  // },
  // proxy: {
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
});

