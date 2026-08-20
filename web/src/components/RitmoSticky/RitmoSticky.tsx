import { Button } from "../ui/button";
import type { RitmoStickyProps } from "./RitmoSticky.types";

export function RitmoSticky({ title, tourCount }: RitmoStickyProps) {
  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">
      <div className="px-4 py-4 rounded-3xl bg-primary-foreground/98 flex flex-nowrap items-center justify-between gap-4 shadow-xl">
        <div className="flex flex-col gap-0.5 w-full min-w-0">
          <span className="uppercase text-[11px] font-extrabold tracking-[0.14em] text-primary-background/70 truncate block">
            Mi ritmo • {tourCount}{" "}
            {tourCount === 1 ? "experience" : "experiences"}
          </span>
          <span className="font-bricolage font-bold text-lg text-primary-background truncate block">
            {title}
          </span>
        </div>

        <Button size="sm" className="shrink-0">
          View Plan
        </Button>
      </div>
    </div>
  );
}
