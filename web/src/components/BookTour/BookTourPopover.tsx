import { X } from "lucide-react";
import { toast } from "sonner";
import { Overlay } from "@/components/Overlay";
import { BookTour } from "./BookTour";
import type { BookTourPopoverProps } from "./BookTourPopover.types";

export function BookTourPopover({ open, tourId, slots, price, onClose }: BookTourPopoverProps) {
  const handleReserved = (added: boolean) => {
    onClose();
    if (added) {
      toast.success("Added to your Ritmo");
    }
  };

  return (
    <Overlay open={open} onClose={onClose}>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-primary-background/14 text-primary-background cursor-pointer"
        >
          <X size={18} strokeWidth={2.5} />
        </button>
        <BookTour tourId={tourId} slots={slots} price={price} onReserved={handleReserved} />
      </div>
    </Overlay>
  );
}