"use client";

import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import useMe from "@/hooks/useMe";

export default function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();
  const users = user?.following;

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
