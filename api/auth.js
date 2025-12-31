import { verifyToken } from "@clerk/backend";

export default async function auth(req) {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const { sub } = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY
    });

    return sub;
  } catch {
    throw new Error("Unauthorized");
  }
}
