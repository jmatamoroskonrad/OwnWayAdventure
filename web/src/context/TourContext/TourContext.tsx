import { createContext, useMemo, type ReactNode } from "react";
import toursMock from "@/mocks/tours.json";
import type { Tour } from "@/types/tour";
import type { TourContextValue } from "./TourContext.types";

export const TourContext = createContext<TourContextValue | undefined>(undefined);

export function TourProvider({ children }: { children: ReactNode }) {
  const tours = toursMock as Tour[];

  const value = useMemo<TourContextValue>(
    () => ({
      tours,
      getTourById: (id: string) => tours.find((tour) => tour.id === id),
    }),
    [tours],
  );

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
}