import auth from "./auth";
import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  try {
    const userId = await auth(req);
    const { amount, type, category } = req.body;
    const sql = neon(process.env.DATABASE_URL);

    await sql`
      INSERT INTO transactions(user_id, amount, type, category)
      VALUES (${userId}, ${amount}, ${type}, ${category});
    `;

    res.json({ success: true });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
