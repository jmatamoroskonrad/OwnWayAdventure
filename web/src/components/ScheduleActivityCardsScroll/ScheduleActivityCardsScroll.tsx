import { ScheduleActivityCard } from "../ScheduleActivityCard";
import {MountainSnow } from "lucide-react"

export function ScheduleActivityCardsScroll() {
  return (
    <div className="flex  w-full overflow-x-auto gap-4 scrollbar-none">
      <ScheduleActivityCard tourState="READY" imgSrc=" " title="Arenal Lava & Forest Walk" duration="3" guests={2} price={120} startTime="8:00 Am" icon={MountainSnow}></ScheduleActivityCard>
      <ScheduleActivityCard tourState="READY" imgSrc=" " title="Arenal Lava & Forest Walk" duration="3" guests={2} price={120} startTime="8:00 Am" icon={MountainSnow}></ScheduleActivityCard>
      <ScheduleActivityCard tourState="READY" imgSrc=" " title="Arenal Lava & Forest Walk" duration="3" guests={2} price={120} startTime="8:00 Am" icon={MountainSnow}></ScheduleActivityCard>
      </div>
  )
}


