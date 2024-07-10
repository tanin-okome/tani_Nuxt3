// server/api/user-update.ts
import { defineEventHandler, readBody } from 'h3';
import db from '../db/db_index';
import { users } from '../db/schema';

export default defineEventHandler(async (event) => {

 const result = await db.select().from(users);

  return result;
});
