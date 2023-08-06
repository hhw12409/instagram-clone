// next auth type 재정의
import { AuthUser } from "./user";

declare module "next-auth" {
  interface Session {
    user: AuthUser;
  }
}
