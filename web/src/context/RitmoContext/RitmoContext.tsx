import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { RitmoBooking } from "@/types/ritmo";
import {
  createBookingApi,
  deleteBookingApi,
  fetchBookings,
  isApiEnabled,
  updateBookingApi,
} from "@/services/bookingsApi";
import type {
  AddBookingInput,
  RitmoContextValue,
  UpdateBookingInput,
} from "./RitmoContext.types";

export const RitmoContext = createContext<RitmoContextValue | undefined>(undefined);

export function RitmoProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<RitmoBooking[]>([]);

  useEffect(() => {
    if (!isApiEnabled) return;
    let cancelled = false;
    fetchBookings()
      .then((data) => { if (!cancelled) setBookings(data); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const isInRitmo = useCallback(
    (tourId: string) => bookings.some((booking) => booking.tourId === tourId),
    [bookings],
  );

  const addBooking = useCallback(async (input: AddBookingInput) => {
    if (isApiEnabled) {
      const created = await createBookingApi(input);
      setBookings((current) => [...current, created]);
      return;
    }
    const newBooking: RitmoBooking = {
      bookingId: crypto.randomUUID(),
      ...input,
    };
    setBookings((current) => [...current, newBooking]);
  }, []);

  const removeBooking = useCallback(async (bookingId: string) => {
    if (isApiEnabled) {
      await deleteBookingApi(bookingId);
    }
    setBookings((current) => current.filter((booking) => booking.bookingId !== bookingId));
  }, []);

  const updateBooking = useCallback(
    async (bookingId: string, input: UpdateBookingInput) => {
      if (isApiEnabled) {
        const existing = bookings.find((b) => b.bookingId === bookingId);
        const updated = await updateBookingApi(bookingId, {
          slot: input.slot ?? existing?.slot ?? "",
          guests: input.guests ?? existing?.guests ?? 1,
        });
        setBookings((current) =>
          current.map((booking) => (booking.bookingId === bookingId ? updated : booking)),
        );
        return;
      }
      setBookings((current) =>
        current.map((booking) =>
          booking.bookingId === bookingId ? { ...booking, ...input } : booking,
        ),
      );
    },
    [bookings],
  );

  const toggleRitmo = useCallback(
    async (tourId: string, defaultSlot: string, defaultGuests: number) => {
      const existing = bookings.find((booking) => booking.tourId === tourId);
      if (existing) {
        await removeBooking(existing.bookingId);
      } else {
        await addBooking({ tourId, slot: defaultSlot, guests: defaultGuests });
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