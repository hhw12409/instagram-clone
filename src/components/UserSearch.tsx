"use client";

import { SearchUser } from "@/model/user";
import React, { FormEvent, useState } from "react";
import useSWR from "swr";
import GridSpinner from "./ui/GridSpinner";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/useDebounce";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

  const handleOnSubmitClick = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col items-center w-full max-w-2xl my-4">
      <form onSubmit={handleOnSubmitClick} className="w-full mb-4">
        <input
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full p-3 text-xl border border-gray-400 outline-none"
        />
      </form>
      {error && <p>Error occurs</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <p>There are no users looking for</p>
      )}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
