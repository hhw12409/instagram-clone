// next auth type 재정의
import { User } from "./user";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
