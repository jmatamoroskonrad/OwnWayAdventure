import { Tag } from "@/components/ui/tag";
import type { TourDescriptionProps } from "./TourDescription.types";
import {Check } from "lucide-react"
export function TourDescription({title}: TourDescriptionProps) {
  return (
    <div className="px-6 py-5 flex flex-col gap-5 ">
      <div className="flex flex-wrap gap-2">
        <Tag variant="green">Guide</Tag>
        <Tag>Moderate</Tag>
        <Tag>3 hours</Tag>
      </div>
      <h1 className="font-bricolage font-black text-[40px] leading-[0.96] tracking-[-0.035em]">{title}</h1>
      <p className="text-[17px] leading-[1.63] text-pretty text-primary-card-foreground/76">You start in closed rainforest — loud, humid, full of things watching you — and come out onto black rock the volcano threw here in 1968. Your guide reads the landscape as you cross it, and the walk ends at a lookout facing the cone.</p>
      <div className="flex flex-col">
        <p className="text-sm font-extrabold tracking-[0.16em] uppercase text-primary-foreground/45">what's included</p>
        <div className="grid grid-cols-1 gap-2.5 py-2">
            <span className="flex gap-2 p-3 bg-primary-green/20 rounded-4xl text-[15px] font-bold "> <Check strokeWidth="2" className="text-primary-green"/> Local Certified guide</span>
            <span className="flex gap-2 p-3 bg-primary-green/20 rounded-4xl text-[15px] font-bold "> <Check strokeWidth="2" className="text-primary-green"/> Local Certified guide</span>
            <span className="flex gap-2 p-3 bg-primary-green/20 rounded-4xl text-[15px] font-bold "> <Check strokeWidth="2" className="text-primary-green"/> Local Certified guide</span>
            <span className="flex gap-2 p-3 bg-primary-green/20 rounded-4xl text-[15px] font-bold "> <Check strokeWidth="2" className="text-primary-green"/> Local Certified guide</span>
          
        </div>


      </div>
    </div>
  );
}
