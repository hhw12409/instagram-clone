import { searchUsers } from "@/core/user";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    slug: string[];
  };
};
export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;
  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const [username, query] = slug;
}
