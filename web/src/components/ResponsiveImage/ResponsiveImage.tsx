import { type  ResponsiveImageProps } from "./ResponsiveImage.types"


export  function ResponsiveImage({mobileSrc, desktopSrc, alt }: ResponsiveImageProps) {
  return (
    <div className="bg-red-600 w-full">
        <img src={mobileSrc} className="sm:hidden h-dvh w-full" alt={alt}/>
        <img src={desktopSrc} className="hidden sm:block max-h-screen object-cover w-full xl:object-bottom" alt={alt} />
    </div>
  )
}