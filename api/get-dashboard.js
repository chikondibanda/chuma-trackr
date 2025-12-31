import auth from "./auth";
import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  try {
    const userId = await auth(req);
    const sql = neon(process.env.DATABASE_URL);

    const result = await sql`
      SELECT
        SUM(CASE WHEN type='income' THEN amount ELSE 0 END)
        -
        SUM(CASE WHEN type='expense' THEN amount ELSE 0 END)
      AS balance
      FROM transactions WHERE user_id = ${userId};
    `;

    res.json({ balance: result[0].balance || 0 });

  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
