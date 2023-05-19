"use client";

import useSWR from "swr";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR("/api/me");
  console.log(data);
  // 1. 백엔드 에게 api/me를 통해서 사용자의 정보를 가져옴
  return <div>FollowingBar</div>;
}
