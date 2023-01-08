import { sequelize, d } from '../database/database';

const Product = sequelize.define('product', {
  id: {
    type: d.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },

  imageUrl: {
    type: d.STRING,
    allowNull: true,
    defaultValue: 'https://teeruto.com/wp-content/uploads/2022/01/aesthetic-japanese-demon-yokai-art-oni-japan-devil-unisex-tshirtmeamp.jpg'
  },

  name: {
    type: d.INTEGER,
    allowNull: false
  },

  price: {
    type: d.INTEGER,
    allowNull: false
  }
});

export { Product };
