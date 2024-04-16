require('dotenv').config();

const config = {
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '2h'
  }
};

module.exports = config;
