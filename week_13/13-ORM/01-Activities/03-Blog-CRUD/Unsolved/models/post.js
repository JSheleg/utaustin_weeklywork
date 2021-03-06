// Dependencies
// =============================================================
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,160] 
      }
      // Your code here to prevent NULL values
      // Your code here to only allow 1 to 160 characters
    },
    body: {
      type: DataTypes.TEXT,
      // Your code here to prevent NULL values
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      // Your code here to have default value of 'Personal'
      defaultValue: 'Personal'
    }
  },
  {
    sequelize
  }
);

module.exports = Post;
