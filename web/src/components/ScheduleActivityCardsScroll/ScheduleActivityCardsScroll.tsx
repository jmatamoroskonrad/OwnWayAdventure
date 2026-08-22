import { ScheduleActivityCard } from "../ScheduleActivityCard";
import { MountainSnow } from "lucide-react";
import { useRitmo } from "@/hooks/useRitmo";
import { useTours } from "@/hooks/useTours";

export function ScheduleActivityCardsScroll() {
  const { bookings } = useRitmo();
  const { getTourById } = useTours();

  return (
    <div className="flex  w-full overflow-x-auto gap-4 scrollbar-none">
      {bookings.map((booking) => {
        const tour = getTourById(booking.tourId);
        if (!tour) return null;

        return (
          <ScheduleActivityCard
            key={booking.bookingId}
            tourState="READY"
            imgSrc={tour.imageUrl}
            title={tour.title}
            duration={tour.duration}
            guests={booking.guests}
            price={tour.price}
            startTime={booking.slot || "TBD"}
            icon={MountainSnow}
          />
        );
      })}
    </div>
  );
}