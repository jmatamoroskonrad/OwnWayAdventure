import { useState } from "react";
import { Button } from "../ui/button";
import { Tag } from "../ui/tag";
import { Check } from "lucide-react";
import type { TourCardProps } from "./TourCard.types";
import { NavLink } from "react-router-dom";
import { useRitmo } from "@/hooks/useRitmo";
import { BookTourPopover } from "@/components/BookTour";

export function TourCard({
  id,
  title,
  description,
  tags,
  price,
  popular,
  imageUrl,
  slots,
}: TourCardProps) {
  const { isInRitmo } = useRitmo();
  const inRitmo = isInRitmo(id);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const titleId = `tour-${id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex flex-col rounded-4xl bg-primary-card-background border-primary-background/12 shadow-2xl transition-all duration-300 mx-2 tablet:mx-0  "
    >
      <div className="relative h-58 tablet:h-80 shrink-0">
        <div className="absolute inset-0 overflow-hidden rounded-t-4xl">
          <img
            data-dc-tpl="60"
            id="ra-hero"
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {popular && (
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-4 py-3 rounded-full text-sm font-bold uppercase tracking-widest bg-primary-green text-primary-text">
              Popular
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 p-6  h-full ">
        <div className="flex flex-col gap-3">
          <h3
            id={titleId}
            className="font-bricolage font-extrabold text-3xl tracking-[-0.03em] max-w-[20ch]"
          >
            {" "}
            {title}{" "}
          </h3>
          <p className="text-[15.5px] text-primary-foreground max-w-[40ch] text-pretty leading-[1.55]">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag.label} variant={tag.variant}>
              {tag.label}
            </Tag>
          ))}
        </div>
        <div className="h-auto flex  gap-4 flex-wrap mt-auto pt-2  items-center ">
          <div className="flex flex-col">
            <span className="font-bold uppercase text-primary-foreground/45  tracking-[0.14em] ">
              From
            </span>
            <span
              aria-label={`${price} dollars per person`}
              className="font-bricolage font-extrabold text-3xl tracking-[-0.02em] leading-[1.1] "
            >
              <span aria-hidden="true">
                ${price}
                <span className="text-sm text-primary-foreground/50 font-semibold">
                  {" "}
                  /person
                </span>
              </span>
            </span>
          </div>
          <div className="flex gap-2.5 ml-auto flex-wrap">
            <Button size="sm" variant="outline" effect="glow" asChild>
              <NavLink
                to={`/details/${id}`}
                aria-label={`Details for ${title}`}
              >
                Details
              </NavLink>
            </Button>
            <Button
              size="sm"
              variant={inRitmo ? "success" : "primary"}
              className="gap-1"
              effect="glow"
              aria-label={
                inRitmo ? `${title} is in your Ritmo` : `Add ${title} to Ritmo`
              }
              aria-pressed={inRitmo}
              onClick={(event) => {
                event.stopPropagation();
                setIsPopoverOpen(true);
              }}
            >
              {inRitmo && (
                <Check size={16} strokeWidth={3} aria-hidden="true" />
              )}
              {inRitmo ? "In your Ritmo" : "Add to Ritmo"}
            </Button>
          </div>
        </div>
      </div>

      <BookTourPopover
        open={isPopoverOpen}
        tourId={id}
        slots={slots}
        price={price}
        onClose={() => setIsPopoverOpen(false)}
      />
    </article>
  );
}
