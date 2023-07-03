import { ProfileUser } from "@/types/user";
import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, username, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username?: string) {
  const user = await client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->_id
    }`
  );
  return user;
}

export async function searchUsers(keyword?: string) {
  // TODO: 필요한값만 가져오게끔 변경하기
  const query = keyword
    ? `&& (name match "*${keyword}*") || (username match "*${keyword}*")`
    : "";
  return client
    .fetch(
      `*[_type == "user" ${query}]{
      ...,
      "following": count(following),
      "followers": count(followers),
    }
    `
    )
    .then((users) =>
      users.map((user: ProfileUser) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}
