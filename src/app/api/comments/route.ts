import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { postAddComment } from "@/core/posts";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { id, comment } = await req.json();

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  if (!id || !comment === undefined) {
    return new Response("Bad Request", { status: 400 });
  }

  return postAddComment(id, user.id, comment)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
