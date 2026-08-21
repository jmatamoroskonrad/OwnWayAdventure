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

  const currentSlot = slots.find((slot) => slot.time === selectedSlot);
  const maxGuests = hasSlots ? currentSlot?.spotsLeft ?? 1 : NO_SLOTS_MAX_GUESTS;
  const atMaxGuests = guests >= maxGuests;
  const totalPrice = price * guests;

  const selectSlot = (slot: TourSlot) => {
    setSelectedSlot(slot.time);
    setGuests((current) => Math.min(current, slot.spotsLeft));
  };

  const increaseGuests = () => {
    setGuests((current) => Math.min(maxGuests, current + 1));
  };

  const decreaseGuests = () => {
    setGuests((current) => Math.max(1, current - 1));
  };

  const toggleReservation = () => {
    if (existingBooking) {
      removeBooking(existingBooking.bookingId);
    } else {
      addBooking({ tourId, slot: selectedSlot, guests });
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
    selectSlot,
    increaseGuests,
    decreaseGuests,
    toggleReservation,
  };
}