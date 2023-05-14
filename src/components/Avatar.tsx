/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

type Props = {
  image?: string | null;
  size?: "small" | "normal";
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "normal",
  highlight = false,
}: Props) {
  const getContainerStyle = (size: string, highlight: boolean): string => {
    const baseStyle = "rounded-full";
    const highlightStyle = highlight
      ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
      : "";
    const sizeStyle = size === "small" ? "w-9 h-9" : "w-[68px] h-[68px]";
    return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
  };
  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        alt="user-profile"
        src={image ?? undefined}
        className="rounded-full p-[0.1rem]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
