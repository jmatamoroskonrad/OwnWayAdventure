import { createContext, useEffect, useMemo, useState, type ReactNode } from "react";
import toursMock from "@/mocks/tours.json";
import { fetchTours, isApiEnabled } from "@/services/tourApi";
import type { Tour } from "@/types/tour";
import type { TourContextValue } from "./TourContext.types";

export const TourContext = createContext<TourContextValue | undefined>(undefined);

export function TourProvider({ children }: { children: ReactNode }) {
  const [tours, setTours] = useState<Tour[]>(isApiEnabled ? [] : (toursMock as Tour[]));
  const [loading, setLoading] = useState(isApiEnabled);

  useEffect(() => {
    if (!isApiEnabled) return;

    let cancelled = false;

    fetchTours()
      .then((data) => {
        if (!cancelled) setTours(data);
      })
      .catch(() => {
        if (!cancelled) setTours(toursMock as Tour[]); 
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<TourContextValue>(
    () => ({
      tours,
      loading,
      getTourById: (id: string) => tours.find((tour) => tour.id === id),
    }),
    [tours, loading],
  );

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
}