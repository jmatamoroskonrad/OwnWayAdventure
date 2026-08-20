import { Tag } from "@/components/ui/tag";
import type { TourDescriptionProps } from "./TourDescription.types";
import {Check } from "lucide-react"
export function TourDescription({title, description, tags, whatsIncluded}: TourDescriptionProps) {
  return (
    <div className="px-2 py-5 flex flex-col gap-5 ">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag.label} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>
      <h1 className="font-bricolage font-black text-[40px] leading-[0.96] tracking-[-0.035em]">{title}</h1>
      <p className="text-[17px] leading-[1.63] text-pretty text-primary-card-foreground/76">{description}</p>
      <div className="flex flex-col">
        <p className="text-sm font-extrabold tracking-[0.16em] uppercase text-primary-foreground/45">what's included</p>
        <div className="grid grid-cols-1 gap-2.5 py-2">
            {whatsIncluded.map((item, index) => (
              <span key={index} className="flex gap-2 p-3 bg-primary-green/20 rounded-4xl text-[15px] font-bold "> <Check strokeWidth="2" className="text-primary-green"/> {item}</span>
            ))}
          
        </div>


      </div>
    </div>
  );
}