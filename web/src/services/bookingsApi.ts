import type { RitmoBooking } from "@/types/ritmo";
import { isApiEnabled } from "@/services/tourApi";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string | undefined;

export { isApiEnabled };

export type CreateBookingInput = {
  tourId: string;
  slot: string;
  guests: number;
};

export type UpdateBookingApiInput = {
  slot: string;
  guests: number;
};

async function parseErrorMessage(response: Response, fallback: string): Promise<string> {
  const body = await response.json().catch(() => null);
  return body?.errors?.[0]?.message ?? fallback;
}

export async function fetchBookings(): Promise<RitmoBooking[]> {
  const response = await fetch(`${API_BASE_URL}/api/v1/bookings`);
  if (!response.ok) throw new Error("Failed to fetch bookings");
  return response.json();
}

export async function createBookingApi(input: CreateBookingInput): Promise<RitmoBooking> {
  const response = await fetch(`${API_BASE_URL}/api/v1/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    throw new Error(await parseErrorMessage(response, "Failed to create booking"));
  }
  return response.json();
}

export async function updateBookingApi(bookingId: string, input: UpdateBookingApiInput): Promise<RitmoBooking> {
  const response = await fetch(`${API_BASE_URL}/api/v1/bookings/${bookingId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    throw new Error(await parseErrorMessage(response, "Failed to update booking"));
  }
  return response.json();
}

export async function deleteBookingApi(bookingId: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/v1/bookings/${bookingId}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(await parseErrorMessage(response, "Failed to remove booking"));
  }
}