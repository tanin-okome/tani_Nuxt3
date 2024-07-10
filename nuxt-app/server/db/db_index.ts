// server/db/db_index.ts
import { createPool } from 'mysql2/promise';
import { drizzle, MySql2DrizzleConfig } from 'drizzle-orm/mysql2';
import * as schema from './schema';
import 'dotenv/config';

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

const pool = createPool({
  host:"localhost",
  user: "test",
  password: "test",
  database: "test",
  port: 3307
});

const config: MySql2DrizzleConfig<typeof schema> = {
  schema,
  mode: 'default', // ここで適切なモードを設定
};


const db = drizzle(pool, config);



export default db;




// import { drizzle } from 'drizzle-orm/mysql2';
// import { MySql2Database, MySql2DrizzleConfig, DrizzleConfig } from 'drizzle-orm/mysql2';
// import { createPool } from 'mysql2/promise';


// import mysql from 'mysql2/promise';
// import * as schema from './schema';

// const dbConfig = {
//   host: process.env.DATABASE_HOST || 'localhost',
//   user: process.env.DATABASE_USER || 'example',
//   password: process.env.DATABASE_PASSWORD || 'example',
//   database: process.env.DATABASE_NAME || 'example',
// };

// const initializeDb = async (): Promise<MySql2Database<typeof schema>> => {
//   const connection = await mysql.createConnection({
//     host: dbConfig.host,
//     user: dbConfig.user,
//     password: dbConfig.password,
//     database: dbConfig.database,
//   });
//   const config: DrizzleConfig<typeof schema> = {
//     schema,
//     mode: 'default',
//   };
//   return drizzle(connection, config);
// };

// export default initializeDb;