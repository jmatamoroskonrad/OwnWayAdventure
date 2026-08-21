import heroImage from "./../assets/hero/hero-bg-responsive.jpeg";

import { HeroBanner } from "@/components/HeroBanner";
import { SchedulePreview } from "@/components/SchedulePreview";
import { HorizontalCardsCarousel } from "@/components/HorizontalCardsCarousel";
import { RitmoSticky } from "@/components/RitmoSticky";
import { TourCard } from "@/components/TourCard";
import { useTours } from "@/hooks/useTours";

export default function HeroPage() {
  const { tours } = useTours();
  const homeTours = tours.slice(0, 4);
  return (
    <div >
      {/* <RitmoSticky title="HorseBack Riding quemado desde aqui " tourCount={2}/> */}
      <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-[2fr_1fr]">
        <div className="tablet:h-full bg-transparent">
          <HeroBanner
            image={heroImage}
            alt="Image of a woman petting a horse"
          />
        </div>
        <SchedulePreview experienceCount="2" totalAmount={148} />
      </div>
      <HorizontalCardsCarousel />
     <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 py-4 gap-4">
       {homeTours.map((tour) => (
         <TourCard
           key={tour.id}
           id={tour.id}
           title={tour.title}
           description={tour.description}
           tags={tour.tags}
           price={tour.price}
           popular={tour.popular}
           imageUrl={tour.imageUrl}
           slots={tour.slots}
         />
       ))}
     </div>
    </div>
  );
}