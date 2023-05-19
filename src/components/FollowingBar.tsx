"use client";

import { DetailUser } from "@/types/user";
import useSWR from "swr";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  console.log(data);
  return <div>FollowingBar</div>;
}
