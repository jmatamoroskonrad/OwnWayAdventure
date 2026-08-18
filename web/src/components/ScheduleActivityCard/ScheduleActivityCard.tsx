import type { ScheduleActivityCardProps } from "./ScheduleActivityCard.types";

export function ScheduleActivityCard({
  startTime,
  duration,
  guests,
  price,
  title,
  icon: Icon,
}: ScheduleActivityCardProps) {
  return (
    <div className="flex flex-col shrink-0 w-fit min-w-50 gap-3 py-4 px-8 rounded-2xl bg-primary-background/8  ">
      <div className="flex items-center gap-2.5">
        <span className="w-3 h-3 rounded-full bg-green-700" />
        <span className="font-bricolage font-extrabold text-[16px] text-primary-text">
          {startTime}
        </span>
        <span className="flex-1 h-0.5 bg-[repeating-linear-gradient(90deg,rgba(237,234,208,0.34)_0px,rgba(237,234,208,0.34)_5px,transparent_5px,transparent_10px)]"></span>
      </div>
      <div className="flex gap-3 items-center text-primary-text">
        <div className="flex items-center justify-center w-16 h-16  shrink-0 rounded-2xl overflow-hidden bg-[linear-gradient(155deg,rgb(22,48,31)_0%,rgb(47,90,55)_52%,rgb(125,138,62)_100%)]">
          <Icon className="w-10 h-10 text-primary-text/85 " />
        </div>
        <div className="flex flex-col ">
          <span className="font-bricolage font-bold text-xl">{title}</span>
          <div className="flex items-center gap-2 text-md text-primary-text/60">
            <span>{duration} Hours</span>
            <span>•</span>
            <span>{guests} guests</span>
            <span>•</span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
