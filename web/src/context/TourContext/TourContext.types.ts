import type { Tour } from "@/types/tour"

export type TourContextValue = {
    tours: Tour[];
    getTourById: (id: string) => Tour | undefined;
};