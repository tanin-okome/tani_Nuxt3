// server/api/user-update.ts
import { defineEventHandler, readBody } from 'h3';
// import { eq } from "drizzle-orm";

// import db from '../db/db_index';
// import { users } from '../db/schema';

export default defineEventHandler(async (event) => {
//   const body = await readBody(event);

//   const { id, name, email } = body;
  
//   await db.update(users)
//     .set({
//       name,
//       email
//     })
//     .where(eq(users.id,(id))); // 正しいメソッドを使用

  return { message: 'hello world'};
});
