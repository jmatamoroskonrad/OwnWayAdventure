import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import type { TimeLineProps } from "./TimeLine.types";

export function TimeLine({ time, activity, onEdit, onRemove }: TimeLineProps) {
  const [timeValue, timePeriod] = time.split(" ");

  return (
    <div className="flex gap-2.5 max-w-125">
      <div className="w-14 shrink-0 flex flex-col items-end gap-2 pt-1.5">
        <span className="font-bricolage font-extrabold text-xl text-primary-foreground tracking-[-0.01em] leading-none">
          {timeValue}
        </span>
        <span className="text-[11.5px] font-bold tracking-widest uppercase text-primary-foreground/42">
          {timePeriod}
        </span>
      </div>
      <div className="w-6.5 shrink-0 flex flex-col items-center">
        <span className="w-3.75 h-3.75 rounded-full bg-primary-green border-[3px] border-primary-background mt-1.5 shrink-0" />
        <span className="flex-1 w-0.75 bg-primary-foreground/16 rounded-full" />
      </div>
      <div className="flex-1 min-w-0 pb-5">
        {activity ? (
          <div className="flex flex-col gap-3.5 p-4 rounded-[26px] bg-primary-card-background border border-primary-foreground/12 shadow-[rgba(33,17,3,0.09)_0px_14px_34px] transition-all duration-250">
            <div className="w-full h-42.5 rounded-[20px] overflow-hidden shrink-0">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-1.75 min-w-0">
                  <Tag variant="green" className="self-start">
                    {activity.badge}
                  </Tag>
                  <span className="font-bricolage font-extrabold text-[22px] tracking-[-0.01em] text-primary-foreground leading-[1.18]">
                    {activity.title}
                  </span>
                </div>
                <span className="ml-auto font-bricolage font-extrabold text-[22px] text-primary-foreground shrink-0">
                  ${activity.price}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Tag variant="outline">{activity.duration}</Tag>
                <Tag variant="outline">{activity.guests} guests</Tag>
              </div>
              <div className="flex gap-2.5 pt-0.5">
                <Button
                        effect="glow"
                  variant="outline"
                  onClick={onEdit}
                  className="min-h-13 text-[14px] px-4.5 border-primary-foreground/50 hover:text-primary-text hover:bg-primary-foreground hover:border-primary-foreground "
                >
                  Edit
                </Button>
                <Button
                effect="glow"
                  variant="outline"
                  onClick={onRemove}
                  className="min-h-13 text-[14px] px-4.5 ml-auto shadow-none text-primary-red border border-primary-red/50 hover:text-primary-text hover:bg-primary-red hover:border-primary-red "
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col tablet:flex-row justify-between gap-3 p-4 rounded-[26px] border border-primary-foreground/20 bg-transparent">
            <span className="text-[15px] font-semibold text-primary-foreground/50">
              Nothing planned yet
            </span>
            <Button asChild size="sm" variant="outline">
              <NavLink to="/tours">Fill the gap</NavLink>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}