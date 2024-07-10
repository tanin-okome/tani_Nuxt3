// server/api/user-update.ts
import { defineEventHandler,readBody} from 'h3';
import db from '../db/db_index';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';


export default defineEventHandler(async (event) => {
  const body = await readBody(event);

 const deleteresult = await db.delete(users).where(eq(users.email, body.email))

  return deleteresult;
});
