// // db/sequelize.js
// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// export const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     logging: false,
//   }
// );

// // export default sequelize;

// import { Sequelize } from 'sequelize';
// import config from '../config/config.cjs'; // <- ES6-compatible import of .cjs

// export const sequelize = new Sequelize(
//   config.development.database,
//   config.development.username,
//   config.development.password,
//   {
//     host: config.development.host,
//     dialect: config.development.dialect,
//     logging: false,
//   }
// );
// db/sequelize.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Import CommonJS config
import pkg from '../config/config.cjs';
const config = pkg;

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port || 5432,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions || {},
    logging: false,
  }
);
