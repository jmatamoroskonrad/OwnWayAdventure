import type { Tour } from "@/types/tour";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string | undefined;

export const isApiEnabled = Boolean(API_BASE_URL);

export async function fetchTours(): Promise<Tour[]> {
  const response = await fetch(`${API_BASE_URL}/api/v1/tours`);
  if (!response.ok) throw new Error("Failed to fetch tours");
  return response.json();
}

export async function deleteTourApi(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/v1/tours/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete tour");
}