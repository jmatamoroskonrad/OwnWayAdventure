import { useState } from "react";
import { useRitmo } from "@/hooks/useRitmo";
import type { TourSlot } from "@/types/tour";

const NO_SLOTS_MAX_GUESTS = 15;

export function useBookTourState(tourId: string, slots: TourSlot[], price: number) {
  const { bookings, addBooking, removeBooking } = useRitmo();
  const existingBooking = bookings.find((booking) => booking.tourId === tourId);
  const reserved = Boolean(existingBooking);

  const hasSlots = slots.length > 0;

  const [selectedSlot, setSelectedSlot] = useState(existingBooking?.slot || slots[0]?.time || "");
  const [guests, setGuests] = useState(existingBooking?.guests || 1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentSlot = slots.find((slot) => slot.time === selectedSlot);
  const maxGuests = hasSlots ? currentSlot?.spotsLeft ?? 1 : NO_SLOTS_MAX_GUESTS;
  const atMaxGuests = guests >= maxGuests;
  const totalPrice = price * guests;

  const selectSlot = (slot: TourSlot) => {
    setSelectedSlot(slot.time);
    setGuests((current) => Math.min(current, slot.spotsLeft));
    setError(null);
  };

  const increaseGuests = () => {
    setGuests((current) => Math.min(maxGuests, current + 1));
  };

  const decreaseGuests = () => {
    setGuests((current) => Math.max(1, current - 1));
  };

  const toggleReservation = async () => {
    setError(null);
    setSubmitting(true);
    try {
      if (existingBooking) {
        await removeBooking(existingBooking.bookingId);
      } else {
        await addBooking({ tourId, slot: selectedSlot, guests });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    hasSlots,
    selectedSlot,
    guests,
    reserved,
    maxGuests,
    atMaxGuests,
    totalPrice,
    submitting,
    error,
    selectSlot,
    increaseGuests,
    decreaseGuests,
    toggleReservation,
  };
}