import type { RitmoBooking } from "@/types/ritmo";

export type AddBookingInput = {
  tourId: string;
  slot: string;
  guests: number;
};

export type UpdateBookingInput = {
  slot?: string;
  guests?: number;
};

export type RitmoContextValue = {
  bookings: RitmoBooking[];
  isInRitmo: (tourId: string) => boolean;
  addBooking: (input: AddBookingInput) => Promise<void>;
  removeBooking: (bookingId: string) => Promise<void>;
  updateBooking: (bookingId: string, input: UpdateBookingInput) => Promise<void>;
  toggleRitmo: (tourId: string, defaultSlot: string, defaultGuests: number) => Promise<void>;
};