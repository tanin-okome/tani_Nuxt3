import { defineEventHandler, readBody } from 'h3';
import db from "../db/db_index";

export default defineEventHandler(async (event) => {
  // リクエストからデータを読み取ります
  const body = await readBody(event);

  // バリデーション: 必須フィールドの確認
  if (!body.name || !body.email) {
    return {
      status: 400,
      body: { message: 'Missing required fields: id, name, email' }
    };
  }

  // データベースエントリの更新
  try {
    // プレースホルダーを用いた SQL 文を使います
    const [rows] = await db.query(`
      UPDATE users
      SET name = ?, email = ?
      WHERE id = ?
    `, [body.name, body.email]);

    return {
      status: 200,
      body: { message: 'User updated successfully' }
    };
  } catch (error) {
    return {
      status: 500,
      body: { message: 'Database error', error }
    };
  }
});