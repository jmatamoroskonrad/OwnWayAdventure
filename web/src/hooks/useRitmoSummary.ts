import { useMemo } from "react";
import { useRitmo } from "./useRitmo";
import { useTours } from "./useTours";

export function useRitmoSummary() {
  const { bookings } = useRitmo();
  const { getTourById } = useTours();

  return useMemo(() => {
    let total = 0;
    let hoursPlanned = 0;
    let guestCount = 0;

    bookings.forEach((booking) => {
      const tour = getTourById(booking.tourId);
      if (!tour) return;
      total += tour.price * booking.guests;
      hoursPlanned += Number(tour.duration) || 0;
      guestCount += booking.guests;
    });

    return {
      experienceCount: bookings.length,
      hoursPlanned,
      guestCount,
      total,
    };
  }, [bookings, getTourById]);
}
