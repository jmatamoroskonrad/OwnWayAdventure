import heroImageMobile from "./../assets/hero/hero-bg-responsive.jpeg";
import heroImageDesktop from "./../assets/hero/hero-bg.jpeg";

import { ResponsiveImage } from "../components/ResponsiveImage";

export default function HeroPage() {
  return (
    <div className="flex  flex-col gap-2 tablet:grid tablet:grid-cols-[2fr_1fr] ">
      <div className="h-120 overflow-hidden tablet:h-full">
        <ResponsiveImage
          mobileSrc={heroImageMobile}
          desktopSrc={heroImageDesktop}
          alt=""
        />
      </div>
      <div className="w-full bg-emerald-950 rounded-2xl p-2 text-amber-50 ">
        <h2>My Ritmo</h2>
        <p>Start adding and pay day appears here</p>
      </div>
    </div>
  );
}
