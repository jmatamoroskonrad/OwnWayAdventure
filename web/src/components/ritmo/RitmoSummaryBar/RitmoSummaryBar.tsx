import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { RitmoSummaryBarProps } from "./RitmoSummaryBar.types.ts";

const DEFAULT_DISCLAIMER =
  "Pay here at the desk or on your phone. Free changes up to 24h before each start.";

export function RitmoSummaryBar({
  experienceCount,
  hoursPlanned,
  guestCount,
  total,
  paid = false,
  onConfirm,
  disclaimer = DEFAULT_DISCLAIMER,
}: RitmoSummaryBarProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-4 p-5 rounded-t-[26px] sticky bottom-0 z-20 shadow-[rgba(33,17,3,0.28)_0px_-20px_44px] transition-colors duration-300",
        paid
          ? "bg-primary-green"
          : "bg-[repeating-radial-gradient(circle_at_110%_-10%,rgba(237,234,208,0.08)_0px,rgba(237,234,208,0.08)_1px,transparent_1px,transparent_15px)] bg-[#211103]",
      )}
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-extrabold tracking-[0.16em] uppercase text-primary-text/50">
          Your Ritmo · {experienceCount} experiences
        </span>
        <span className="text-sm font-semibold text-primary-text/70">
          {experienceCount} experiences · {hoursPlanned} hours planned · {guestCount} guests
        </span>
      </div>
      <div className="flex items-end gap-4.5 flex-wrap">
        <div className="flex flex-col">
          <span className="text-[12.5px] font-bold text-primary-text/55">
            Total · taxes included
          </span>
          <span className="font-bricolage font-extrabold text-[38px] text-primary-text leading-[1.05]">
            ${total}
          </span>
        </div>
        {paid ? (
          <span className="ml-auto flex items-center gap-2 px-6 py-4 rounded-[18px] bg-primary-text/15 text-primary-text font-extrabold text-[17px]">
            <Check strokeWidth={3} size={20} />
            Service paid
          </span>
        ) : (
          <Button size="lg" effect="glow" onClick={onConfirm} className="ml-auto">
            Confirm &amp; pay →
          </Button>
        )}
      </div>
      <span className="text-[12.5px] font-semibold text-primary-text/50">
        {paid ? "Show this screen at check-in for each activity." : disclaimer}
      </span>
    </div>
  );
}