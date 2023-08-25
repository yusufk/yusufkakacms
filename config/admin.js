module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '310af1cff627ff27f4fe26fb9eef1018'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
