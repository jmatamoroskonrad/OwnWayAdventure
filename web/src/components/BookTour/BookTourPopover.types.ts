import type { TourSlot } from "@/types/tour";

export type BookTourPopoverProps = {
    tourId: string;
    price: number;
    open: boolean;
    slots: TourSlot[];
    onClose: () => void;
}