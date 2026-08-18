import { Button } from "../ui/button";
import type { HeroBannerProps } from "./HeroBanner.types";

export function HeroBanner({ image, alt }: HeroBannerProps) {
  return (
    <div
      aria-label={alt}
      className="relative flex flex-col gap-4.5 p-5 rounded-[30px] bg-[repeating-radial-gradient(circle_at_100%_-10%,rgba(237,234,208,0.08)_0px,rgba(237,234,208,0.08)_1px,transparent_1px,transparent_15px)] bg-[#211103] shadow-[rgba(33,17,3,0.3)_0px_22px_48px]"
      // style={{ backgroundImage: `url(${image})` }}
    >
      {/* <div className="absolute inset-0 bg-black/10 "></div>
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-[#2b0805]/80 via-[#6b1f12]/50 to-transparent"></div>
      <div className="relative z-10 mt-auto ">
        <div className="max-w-2xl">
          <h1
            data-dc-tpl="64"
            className="m-0 font-bricolage font-extrabold text-[58px] leading-[0.92] tracking-[-0.035em] text-primary-text "
          >
            Build
            <br />
            <em className="not-italic relative">
              Your Ritmo
              <span className="absolute left-0 right-0 bottom-[0.04em] h-[0.09em] bg-primary-red rounded-full"></span>
            </em>
          </h1>
        </div>
        <div className="mt-6 flex flex-col gap-3 tablet:flex-row tablet:items-center ">
          <Button size="lg" effect="glow" className="w-full tablet:w-auto">
            Plan my days
          </Button>
          <Button
            size="lg"
            className="w-full tablet:w-auto text-primary-text border-primary-text hover:text-white"
            variant="outline"
          >
            Plan my days
          </Button>
        </div>
      </div> */}
      <div data-dc-tpl="59" className="absolute inset-0">
        <img data-dc-tpl="60" id="ra-hero"></img>
      </div>
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(105deg,rgba(33,17,3,0.86)_0%,rgba(33,17,3,0.58)_46%,rgba(33,17,3,0.06)_78%)]"
      ></div>
      <h1
        className="m-0 font-bricolage font-extrabold text-[58px] leading-[0.92] tracking-[-0.035em] text-primary-text "
      >
        Build
        <br />
        <em className="not-italic relative">
          Your Ritmo
          <span className="absolute left-0 right-0 bottom-[0.04em] h-[0.09em] bg-primary-red rounded-full"></span>
        </em>
      </h1>
      <div className="mt-6 flex flex-col gap-3 tablet:flex-row tablet:items-center ">
        <Button size="lg" effect="glow" className="w-full tablet:w-auto">
          Plan my days
        </Button>
        <Button
          size="lg"
          className="w-full tablet:w-auto text-primary-text border-primary-text hover:text-white"
          variant="outline"
        >
          Plan my days
        </Button>
      </div>
    </div>
  );
}
