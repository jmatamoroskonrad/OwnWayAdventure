import { type ResponsiveImageProps } from "./ResponsiveImage.types";

export function ResponsiveImage({
  mobileSrc,
  desktopSrc,
  alt,
}: ResponsiveImageProps) {
  return (
    <div className="w-full h-full ">
      <img
        src={mobileSrc}
        className="block h-full w-full  rounded-xl object-cover tablet:hidden "
        alt={alt}
      />
      <img
        src={desktopSrc}
        className="hidden w-full h-full  object-cover  tablet:block desktop:object-bottom  rounded-xl "
        alt={alt}
      />
    </div>
  );
}
