import { NavLink } from "react-router-dom";
import { TourCard } from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import toursMock from "@/mocks/tours.json";
import type { Tour } from "@/types/tour";

const tours = toursMock as Tour[];

export default function ToursPage() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <h1 className="font-bricolage font-extrabold text-3xl tracking-tight">
            All experiences
          </h1>
          <span className="py-1.5 px-2.75 bg-primary-red text-primary-text text-[12px] font-extrabold rounded-[20px]">
            {tours.length} tours
          </span>
        </div>
        <span className="text-sm text-primary-foreground/75">
          Every tour we run in La Fortuna, in one place
        </span>
      </div>

      <div className="relative flex flex-col gap-5 p-6 tablet:p-8 rounded-[30px] bg-[repeating-radial-gradient(circle_at_100%_-10%,rgba(237,234,208,0.08)_0px,rgba(237,234,208,0.08)_1px,transparent_1px,transparent_15px)] bg-[#211103] shadow-[rgba(33,17,3,0.3)_0px_22px_48px] text-primary-text overflow-hidden">
        <div className="flex flex-col gap-2 max-w-xl">
          <h2 className="font-bricolage font-extrabold text-3xl tablet:text-4xl tracking-[-0.02em] leading-[1.05]">
            Can't decide? <br />
            <em className="not-italic relative">
              Build your Ritmo
              <span className="absolute left-0 right-0 bottom-[0.04em] h-[0.09em] bg-primary-red rounded-full"></span>
            </em>
          </h2>
          <p className="text-[15px] text-primary-text/70 max-w-[42ch]">
            Pick a few experiences and we'll shape them into the days that fit
            your trip.
          </p>
        </div>
        <div>
          <Button asChild size="lg" effect="glow">
            <NavLink to="/ritmo">Plan my days</NavLink>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 py-4 gap-4">
        {tours.map((tour) => (
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
