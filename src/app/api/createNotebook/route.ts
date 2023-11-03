// /api/createNotebook

import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  const { userId } = auth();
  const body = await req.json();
  const { name } = body;
}
