import { defineEventHandler, readBody } from 'h3';
import { useRuntimeConfig } from '#imports';
import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { name, email } = await readBody(event);

  const kensho = {name: "taniguchi"}

  try {
    const connection = await mysql.createConnection({
      host: config.mysqlHost,
      port: Number(config.mysqlPort),
      user: config.mysqlUser,
      password: config.mysqlPassword,
      database: config.mysqlDatabase,
    });

    await connection.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );

    return { status: 'success' };
  } catch (error) {
    console.error('Database error:', error);
    return { status: 'error', message: error.message || 'Internal Server Error', data: error };
  }
});
