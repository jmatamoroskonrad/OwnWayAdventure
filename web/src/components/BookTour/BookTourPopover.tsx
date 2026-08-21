import { X } from "lucide-react";
import { Overlay } from "@/components/Overlay";
import { BookTour } from "./BookTour";
import type { BookTourPopoverProps } from "./BookTourPopover.types";

export function BookTourPopover({open, tourId, slots, price, onClose }: BookTourPopoverProps) {
  return (
    <Overlay open={open} onClose={onClose}>
      <div className="relative w-full max-w-sm tablet:max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-primary-background/14 text-primary-background cursor-pointer"
        >
          <X size={18} strokeWidth={2.5} />
        </button>
        <BookTour tourId={tourId} slots={slots} price={price} />
      </div>
    </Overlay>
  );
}