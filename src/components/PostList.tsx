"use client";

import { SimplePost } from "@/types/post";
import { GridLoader } from "react-spinners";
import useSWR from "swr";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");

  return (
    <section>
      {loading && (
        <div className="mt-32 text-center">
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post.id} className="mb-4">
                <PostListCard post={post} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
