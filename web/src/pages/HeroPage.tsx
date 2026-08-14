import heroImage from "./../assets/hero/hero-bg-responsive.jpeg";

import { HeroBanner } from "@/components/HeroBanner";

export default function HeroPage() {
  return (
    <div className="flex flex-col gap-2 tablet:grid tablet:grid-cols-[2fr_1fr]">
        <div className="tablet:h-full">
          <HeroBanner
            title="Build your Ritmo"
            image={heroImage}
            alt="Image of a woman petting a horse"
          />
        </div>
        <div className="w-full bg-emerald-950 rounded-2xl p-2 text-amber-50 ">
          <h2>My Ritmo</h2>
          <p>Start adding and pay day appears here</p>
        </div>

    </div>
  );
}
