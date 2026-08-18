import heroImage from "./../assets/hero/hero-bg-responsive.jpeg";
import { FilterCard } from "@/components/FilterCard";
import { HeroBanner } from "@/components/HeroBanner";
import { SchedulePreview } from "@/components/SchedulePreview";

export default function HeroPage() {
  return (
    <div>
      <div className="flex flex-col gap-2 tablet:grid tablet:grid-cols-[2fr_1fr]">
        <div className="tablet:h-full bg-transparent">
          <HeroBanner
            image={heroImage}
            alt="Image of a woman petting a horse"
          />
        </div>
        <SchedulePreview experienceCount="2" totalAmount={148}/>
      </div>
      <div className="flex gap-5">
        <FilterCard emoji="🌋" title="Volcano" subtitle="volcano description" />
        <FilterCard emoji="🌋" title="Volcano" subtitle="volcano description" />
        <FilterCard emoji="🌋" title="Volcano" subtitle="volcano description" />
        <FilterCard emoji="🌋" title="Volcano" subtitle="volcano description" />
      </div>
    </div>
  );
}
