import { useState } from "react";
import heroImage from "./../assets/hero/hero-bg-responsive.jpeg";
import { HeroBanner } from "@/components/HeroBanner";
import { SchedulePreview } from "@/components/SchedulePreview";
import { HorizontalCardsCarousel } from "@/components/HorizontalCardsCarousel";
import { RitmoSticky } from "@/components/RitmoSticky";
import { TourCard } from "@/components/TourCard";
import { useTours } from "@/hooks/useTours";
import { useRitmo } from "@/hooks/useRitmo";
import { useRitmoSummary } from "@/hooks/useRitmoSummary";
export default function HeroPage() {
  const { tours } = useTours();
  const { bookings } = useRitmo();
  const { experienceCount, total } = useRitmoSummary();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const homeTours = selectedCategory
    ? tours.filter((tour) => tour.category === selectedCategory).slice(0, 3)
    : tours.slice(0, 4);
  const lastBooking = bookings[bookings.length - 1];
  const lastTour = lastBooking
    ? tours.find((tour) => tour.id === lastBooking.tourId)
    : undefined;
  return (
    <div>
      {lastTour && (
        <RitmoSticky title={lastTour.title} tourCount={experienceCount} />
      )}
      <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-[2fr_1fr]">
        <div className="tablet:h-full bg-transparent shrink-0">
          <HeroBanner
            image={heroImage}
            alt="Image of a woman petting a horse"
          />
        </div>
        <SchedulePreview
          experienceCount={String(experienceCount)}
          totalAmount={total}
        />
      </div>
      <HorizontalCardsCarousel
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 py-4 gap-4 pb-30">
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
