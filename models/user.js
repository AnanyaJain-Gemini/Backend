// import { DataTypes } from 'sequelize';
// import { sequelize } from '../db/sequelize.js';

// export const User = sequelize.define(
//   'User',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: 'users',
//     timestamps: true, // adds created_at and updated_at
//     underscored: true, // uses snake_case for column names
//     paranoid: true, // enables soft delete using deleted_at
//   }
// );
