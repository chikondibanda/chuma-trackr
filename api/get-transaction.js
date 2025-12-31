import auth from "./auth";
import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  try {
    const userId = await auth(req);
    const sql = neon(process.env.DATABASE_URL);

    const result = await sql`
      SELECT * FROM transactions
      WHERE user_id = ${userId}
      ORDER BY transaction_date DESC;
    `;

    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
