import { RitmoHeader } from "@/components/ritmo/RitmoHeader";
import { formatToLongDate } from "@/utils/dateUtils";
import { TimeLine } from "@/components/ritmo/TimeLine";
import { RitmoSummaryBar } from "@/components/ritmo/RitmoSummaryBar";

export default function RitmoPage() {
  const today: string = formatToLongDate();
  return (
    <div>
      <RitmoHeader toursCount={3} hoursCount={8} />
      <div className="flex items-center gap-3.5 pt-3.5 pb-1.5 px-2 tablet:max-w-200">
        <span className="font-bricolage font-extrabold text-2xl tracking-[-0.01em] text-primary-foreground">
          {today}
        </span>
        <span className="flex-1 h-px bg-[repeating-linear-gradient(90deg,rgba(33,17,3,0.22)_0px,rgba(33,17,3,0.22)_6px,transparent_6px,transparent_12px)]"></span>
        <span className="font-bricolage font-extrabold text-xl ">$148</span>
      </div>

      <TimeLine
        time="8:00 AM"
        activity={{
          image: "/images/tours/tour1.jpeg",
          price: 116,
          badge: "Guided",
          title: "Tour a Caballo",
          duration: "3 hours",
          guests: 2,
        }}
      />

      <TimeLine time="11:00 AM" />
      <TimeLine
        time="3:00 PM"
        activity={{
          image: "/images/tours/tour2.jpeg",
          price: 116,
          badge: "Guided",
          title: "Tour a Caballo",
          duration: "3 hours",
          guests: 2,
        }}
      />

      <RitmoSummaryBar
        experienceCount={2}
        hoursPlanned={5}
        guestCount={2}
        total={148}
        onConfirm={() => {}}
      />
    </div>
  );
}
