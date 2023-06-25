export type User = {
  name: string;
  email: string;
  image?: string;
  username: string;
};

export type SimpleUser = Pick<User, "username" | "image">;

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

export type ProfileUser = User & {
  following: number;
  followers: number;
};
