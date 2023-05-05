"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import ColorButton from "./ui/ColorButton";
import { signIn } from "next-auth/react";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-between px-6">
      <Link href="/" className="text-3xl font-bold">
        <h1>Instagram</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-4 p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {item.href === pathName ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton
            text="Sign in"
            onClick={() => {
              signIn("google");
            }}
          />
        </ul>
      </nav>
    </div>
  );
}
