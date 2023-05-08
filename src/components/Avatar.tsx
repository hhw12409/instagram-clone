/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className="rounded-full w-9 h-9 bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      <img
        alt="user-profile"
        src={image ?? undefined}
        className="rounded-full p-[0.1rem]"
      />
    </div>
  );
}
