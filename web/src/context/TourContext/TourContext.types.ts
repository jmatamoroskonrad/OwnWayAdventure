import type { Tour } from "@/types/tour"

export type TourContextValue = {
    tours: Tour[];
    loading: boolean;
    getTourById: (id: string) => Tour | undefined;
};