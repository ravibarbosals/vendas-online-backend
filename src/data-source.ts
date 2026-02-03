<<<<<<< HEAD
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

// Aponta diretamente para o ficheiro .env que a sua aplicação usa em desenvolvimento
config({ path: '.env.local' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/**/*.entity{.js,.ts}'],
  migrations: [__dirname + '/migration/*{.js,.ts}'],
};

const dataSource = new DataSource(dataSourceOptions);
=======
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

// Aponta diretamente para o ficheiro .env que a sua aplicação usa em desenvolvimento
config({ path: '.env.local' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/**/*.entity{.js,.ts}'],
  migrations: [__dirname + '/migration/*{.js,.ts}'],
};

const dataSource = new DataSource(dataSourceOptions);
>>>>>>> 95c281e (chore: upgrade NestJS v9 to v11 and refactor cache moduleto use the new environment file path)
export default dataSource;