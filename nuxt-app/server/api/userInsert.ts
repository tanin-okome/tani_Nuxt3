// server/api/user-update.ts
import { defineEventHandler } from 'h3';
import db from '../db/db_index';
import { users } from '../db/schema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

 const insertresult = await db.insert(users).values({ name: body.name, email:body.email });

  return insertresult;
});
