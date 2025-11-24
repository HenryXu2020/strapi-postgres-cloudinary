module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'), // 这就是解决第一个警告的关键配置[citation:2]
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'), // 这个可以一并解决第二个警告
    },
  },
});
