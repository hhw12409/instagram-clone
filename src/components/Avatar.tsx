/* eslint-disable @next/next/no-img-element */

type AvatarSize = "small" | "medium" | "large";
type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "large",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        alt="user-profile"
        src={image ?? undefined}
        className={`bg-white rounded-full object-cover ${getImageSizeStyle(
          size
        )}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize): string {
  const containerSizeObj = {
    small: "w-9 h-9",
    medium: "w-11 h-11",
    large: "w-[68px] h-[68px]",
  };
  return containerSizeObj[size];
}

function getImageSizeStyle(size: AvatarSize): string {
  const imageSizeObj = {
    small: "w-[34px] h-[34px] p-[0.1rem]",
    medium: "w-[42px] h-[42px] p-[0.1rem]",
    large: "w-16 h-16 p-[0.15rem]",
  };
  return imageSizeObj[size];
}
