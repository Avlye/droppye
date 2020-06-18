import * as dotenv from 'dotenv';
dotenv.config();

export default {
  BASE_URL: process.env.BASE_URL ?? '',
  MONGO_URL: process.env.MONGO_URL ?? '',
};
