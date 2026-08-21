import type { TourSlot } from "@/types/tour"

export type BookTourProps = {
    slots: TourSlot[];
    price: number;
    tourId: string;
}