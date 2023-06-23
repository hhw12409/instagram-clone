"use client";

import { DetailUser } from "@/types/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  /* TODO: 나중에 ...data?.following 하나만 놔두고 나머지는 삭제하기
  현재는 슬라이드 테스트를 위해서 임시로 데이터를 많이 구성중 */
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  if (error) {
    return <div>Error</div>;
  }

  return (
    <section className="flex items-center justify-center w-full p-4 mb-4 rounded-lg shadow-sm shadow-neutral-300 min-h-[90px] overflow-x-auto relative z-0">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        !users || (users.length === 0 && <p>{`You don't have following`}</p>)
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              href={`/user/${username}`}
              className="flex flex-col items-center w-20"
              key={username}
            >
              <Avatar image={image} highlight />
              <p className="w-full overflow-hidden text-sm text-center text-ellipsis">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
