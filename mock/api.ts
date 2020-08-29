export default {
  // 支持值为 Object 和 Array
  'GET /api/user': { users: [1, 2] },
  'GET /api/login': {
    isLogin: true,
    token: 'token',
    role: 2,
    userName: 'john',
  },
  'POST /api/login': {
    isLogin: true,
    token: 'token',
    role: 1,
    userName: 'admin',
  },
  // GET 可忽略
  '/api/users/1': { id: 1 },
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req: any, res: any) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
