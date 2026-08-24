import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Overlay } from "@/components/Overlay";
import { Button } from "@/components/ui/button";
import { PlaceholderDebitCard } from "@/components/PlaceholderDebitCard";
import { TimeLine } from "@/components/ritmo/TimeLine";
import { useRitmo } from "@/hooks/useRitmo";
import { useTours } from "@/hooks/useTours";
import type { PaymentModalProps } from "./PaymentModal.types";

type PaymentStep = "review" | "processing" | "success";

export function PaymentModal({ open, onClose, onPaid, total }: PaymentModalProps) {
  const [step, setStep] = useState<PaymentStep>("review");
  const { bookings } = useRitmo();
  const { getTourById } = useTours();

  useEffect(() => {
    if (!open) setStep("review");
  }, [open]);

  useEffect(() => {
    if (step !== "processing") return;
    const timer = setTimeout(() => {
      setStep("success");
      onPaid();
    }, 4000);
    return () => clearTimeout(timer);
  }, [step, onPaid]);

  return (
    <Overlay open={open} onClose={onClose}>
      <div className="relative w-fullf flex flex-col gap-6 p-4 rounded-[30px] bg-primary-card-background text-primary-foreground">
        {step === "review" && (
          <>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-foreground/50">
                Pay with card
              </span>
              <span className="font-bricolage font-extrabold text-[32px] leading-none">
                ${total}
              </span>
            </div>
            <PlaceholderDebitCard />
            <Button size="lg" effect="glow" onClick={() => setStep("processing")}>
              Pay ${total}
            </Button>
          </>
        )}

        {step === "processing" && (
          <div className="flex flex-col items-center gap-6 py-6">
            <PlaceholderDebitCard />
            <div className="flex items-center gap-2.5 text-primary-foreground/70 font-semibold">
              <Loader2 className="animate-spin" size={20} />
              Processing payment...
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-3 py-4">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-green text-primary-text animate-in zoom-in duration-300">
                <Check size={32} strokeWidth={3} />
              </span>
              <span className="font-bricolage font-extrabold text-[22px]">
                Payment successful!
              </span>
              <span className="text-sm text-primary-foreground/60 text-center">
                Your Ritmo is booked. See you soon.
              </span>
            </div>

            <div className="flex flex-col pr-1">
              {bookings.map((booking) => {
                const tour = getTourById(booking.tourId);
                if (!tour) return null;
                return (
                  <TimeLine
                    key={booking.bookingId}
                    time={booking.slot || "TBD"}
                    activity={{
                      image: tour.imageUrl,
                      price: tour.price * booking.guests,
                      badge: tour.tags[0]?.label ?? "Tour",
                      title: tour.title,
                      duration: `${tour.duration} hours`,
                      guests: booking.guests,
                    }}
                  />
                );
              })}
            </div>

            <Button size="lg" onClick={onClose}>
              Done
            </Button>
          </div>
        )}
      </div>
    </Overlay>
  );
}