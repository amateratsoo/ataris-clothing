import { Sequelize, DataTypes } from 'sequelize';
import { Product } from '../models/product';

const sequelize = new Sequelize('sqlite::memory', { logging: false });
const d = DataTypes;

async function database() {
  try {
    await sequelize.authenticate();
    await Product.sync();

    console.log('Connected to the database');
  }

  catch(err) {
    console.log(err);
  }
}

export { sequelize, d, database };
