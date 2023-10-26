import dotenv from 'dotenv';

dotenv.config();

import { Sequelize } from 'sequelize-typescript';
import { Phone } from '../models/phoneModel';


const DB_URL: string = process.env.DB_CONNECT!;

export const sequelize = new Sequelize(DB_URL, {
  models: [Phone],
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
