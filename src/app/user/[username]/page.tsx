import { getUserForProfile } from "@/core/user";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    username: string;
  };
};

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUserForProfile(username);
  if (!user) {
    notFound();
  }
  return <div>UserPage</div>;
}
