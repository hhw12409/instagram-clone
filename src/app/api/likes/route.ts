import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { putDisLikePost, putLikePost } from "@/core/posts";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { id, like } = await req.json();

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  if (!id || !like === undefined) {
    return new Response("Bad Request", { status: 400 });
  }

  const request = like ? putLikePost : putDisLikePost;

  return request(id, user.id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
