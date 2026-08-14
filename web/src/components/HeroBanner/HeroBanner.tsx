import { Button } from "../ui/button";
import type { HeroBannerProps } from "./HeroBanner.types";

export function HeroBanner({ image, title, alt }: HeroBannerProps) {
  return (
    <div
      aria-label={alt}
      className="relative flex min-h-205 w-full flex-col justify-end rounded-2xl bg-cover p-5 tablet:min-h-125 desktop:p-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/10 "></div>
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-[#2b0805]/80 via-[#6b1f12]/50 to-transparent"></div>
      <div className="relative z-10 mt-auto ">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-shadow-primary-button leading-none text-primary-button tablet:text-5xl desktop:text-6xl">
            {title}
          </h1>
        </div>
        <div className="mt-6 flex flex-col gap-3 tablet:flex-row tablet:items-center ">
          <Button size="lg" effect="glow" className="w-full tablet:w-auto">
            Plan my days
          </Button>
          <Button size="lg" className="w-full tablet:w-auto text-primary-text border-primary-text hover:text-white" variant="outline">
            Plan my days
          </Button>
        </div>
      </div>
    </div>
  );
}
