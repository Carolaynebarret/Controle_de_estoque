module.exports = {
  development: {
    username: 'user',
    password: 'password',
    database: 'db',
    host: '127.0.0.1',
    dialect: 'mysql',
    options: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || '3306',
      dialect: 'mysql',
    },
  },
};
