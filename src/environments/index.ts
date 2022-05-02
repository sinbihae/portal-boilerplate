import * as dotenv from 'dotenv';

dotenv.config();

//Port 설정
const PORT: number = +process.env.PORT || 8080;

//Typeorm 설정
const TYPEORM = {
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'portal_test',
};

//Redis 설정
const REDIS_HOST: string = process.env.REDIS_HOST || '127.0.0.1';

export { PORT, TYPEORM, REDIS_HOST };
