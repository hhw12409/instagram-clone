import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { putDisLikePost, putLikePost } from "@/core/posts";
import { putAddBookmark, putRemoveBookmark } from "@/core/user";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { id, bookmark } = await req.json();

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  if (!id || !bookmark === undefined) {
    return new Response("Bad Request", { status: 400 });
  }

  const request = bookmark ? putAddBookmark : putRemoveBookmark;

  return request(user.id, id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
