import { createContext, useCallback, useMemo, useState, type ReactNode } from "react";
import type { RitmoBooking } from "@/types/ritmo";
import type {
  AddBookingInput,
  RitmoContextValue,
  UpdateBookingInput,
} from "./RitmoContext.types";

export const RitmoContext = createContext<RitmoContextValue | undefined>(undefined);

export function RitmoProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<RitmoBooking[]>([]);

  const isInRitmo = useCallback(
    (tourId: string) => bookings.some((booking) => booking.tourId === tourId),
    [bookings],
  );

  const addBooking = useCallback((input: AddBookingInput) => {
    const newBooking: RitmoBooking = {
      bookingId: crypto.randomUUID(),
      ...input,
    };
    setBookings((current) => [...current, newBooking]);
  }, []);

  const removeBooking = useCallback((bookingId: string) => {
    setBookings((current) => current.filter((booking) => booking.bookingId !== bookingId));
  }, []);

  const updateBooking = useCallback((bookingId: string, input: UpdateBookingInput) => {
    setBookings((current) =>
      current.map((booking) =>
        booking.bookingId === bookingId ? { ...booking, ...input } : booking,
      ),
    );
  }, []);

  const toggleRitmo = useCallback(
    (tourId: string, defaultSlot: string, defaultGuests: number) => {
      const existing = bookings.find((booking) => booking.tourId === tourId);
      if (existing) {
        removeBooking(existing.bookingId);
      } else {
        addBooking({ tourId, slot: defaultSlot, guests: defaultGuests });
      }
    },
    [bookings, addBooking, removeBooking],
  );

  const value = useMemo<RitmoContextValue>(
    () => ({ bookings, isInRitmo, addBooking, removeBooking, updateBooking, toggleRitmo }),
    [bookings, isInRitmo, addBooking, removeBooking, updateBooking, toggleRitmo],
  );

  return <RitmoContext.Provider value={value}>{children}</RitmoContext.Provider>;
}