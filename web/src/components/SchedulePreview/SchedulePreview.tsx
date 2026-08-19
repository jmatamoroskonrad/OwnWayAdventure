import type { SchedulePreviewProps } from "./SchedulePreview.types";
import { ScheduleActivityCardsScroll } from "@/components/ScheduleActivityCardsScroll";
import { formatToLongDate } from "@/utils/dateUtils";
import { Button } from "../ui/button";
import { MoveRight} from "lucide-react"

const today: string = formatToLongDate();

export function SchedulePreview({
  experienceCount,
  totalAmount,
}: SchedulePreviewProps) {
  return (
    <div className="flex flex-col gap-4.5 p-5 rounded-[30px] bg-[repeating-radial-gradient(circle_at_100%_-10%,rgba(237,234,208,0.08)_0px,rgba(237,234,208,0.08)_1px,transparent_1px,transparent_15px)] bg-[#211103] shadow-[rgba(33,17,3,0.3)_0px_22px_48px]">
      <div className="flex flex-col gap-1.5  text-primary-text">
        <div className="flex items-center gap-2.5 ">
          <span className="font-bold text-2xl tracking-[-0.01em] font-bricolage ">
            {" "}
            My Ritmo
          </span>
          <span className="py-1.5 px-2.75 bg-primary-red text-[12px] font-extrabold rounded-[20px]">
            <span>{experienceCount} experiences</span>
          </span>
        </div>
        <span className="text-sm font-semibold text-primary-text/50">
          {today}
        </span>
        <div className="flex gap-4 mt-4 justify-between items-center">
          <div className="flex flex-col justify-start">
            <span className="text-sm uppercase text-primary-text/50 ">
              Trip so far
            </span>
            <div className="font-bricolage font-extrabold text-3xl leading-[1.1] flex items-baseline -space-x-0.5">
              <span>$</span>
              <span>{totalAmount}</span>
            </div>
          </div>
          <Button size="sm"  effect="glow"  >
          See my days <MoveRight className="h-5 w-5 m-2" strokeWidth={3} />
        </Button>
        </div>
      </div>
      <ScheduleActivityCardsScroll />
    </div>
  );
}
