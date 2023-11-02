import dotenv from 'dotenv';

dotenv.config();

import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/productModel';
import { ProductInfo } from '../models/productInfoModel';


// const DB_URL: string = process.env.DB_CONNECT!;
const DB_URL: string = 'postgres://nice_const_bro:rbZNgKwdEhHdudodMJvN4pwwIbA8P8qS@dpg-ckr7cn1rfc9c73cualvg-a.frankfurt-postgres.render.com/phones_db_nus9'

export const sequelize = new Sequelize(DB_URL, {
  models: [Product, ProductInfo],
  dialectOptions: {
    ssl: true,
  }
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
