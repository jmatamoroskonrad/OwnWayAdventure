import heroImage from "./../assets/hero/hero-bg-responsive.jpeg";

import { HeroBanner } from "@/components/HeroBanner";
import { SchedulePreview } from "@/components/SchedulePreview";
import { HorizontalCardsCarousel } from "@/components/HorizontalCardsCarousel";
import { TourCard } from "@/components/TourCard";
import toursMock from "@/mocks/tours.json";
import type { Tour } from "@/types/tour";

const tours = toursMock as Tour[];
const homeTours = tours.slice(0, 4);

export default function HeroPage() {
  return (
    <div >
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
     <div className="flex flex-col tablet:flex-row py-4 gap-4">
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
         />
       ))}
     </div>
    </div>
  );
}