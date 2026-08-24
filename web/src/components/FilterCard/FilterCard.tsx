import type { FilterCardProps } from "./FilterCard.types";
import { cva } from "class-variance-authority";

const filterCardVariants = cva(
  "scroll-mt-0 snap-start shrink-0 flex flex-col gap-1.5 items-start justify-end p-5 w-49 min-h-37 rounded-3xl cursor-pointer transition-all duration-200 text-left border-[1.5px] border-transparent translate-y-0.75 shadow-[rgba(33,17,3,0.26)_0px_14px_30px]",
  {
    variants: {
      color: {
        red: "",
        green: "",
        blue: "",
        brown: "",
      },
      selected: {
        true: "scale-105 text-[#edead0] bg-[repeating-radial-gradient(circle_at_90%_130%,rgba(237,234,208,0.16)_0px,rgba(237,234,208,0.16)_1px,transparent_1px,transparent_13px)]",
        false: "bg-white text-[#211103] bg-[repeating-radial-gradient(circle_at_90%_130%,rgba(33,17,3,0.08)_0px,rgba(33,17,3,0.08)_1px,transparent_1px,transparent_13px)]",
      },
    },
    compoundVariants: [
      { color: "red", selected: true, class: "bg-primary-red" },
      { color: "green", selected: true, class: "bg-primary-green" },
      { color: "blue", selected: true, class: "bg-primary-blue" },
      { color: "brown", selected: true, class: "bg-primary-foreground" },
    ],
    defaultVariants: {
      color: "red",
      selected: false,
    },
  },
);

const filterPillVariants = cva(
  "scroll-mt-0 snap-start shrink-0 flex items-center gap-1.5 px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 text-[14px] font-bold border-[1.5px] border-transparent",
  {
    variants: {
      color: {
        red: "",
        green: "",
        blue: "",
        brown: "",
      },
      selected: {
        true: "scale-105 text-[#edead0]",
        false: "bg-white text-[#211103]",
      },
    },
    compoundVariants: [
      { color: "red", selected: true, class: "bg-primary-red" },
      { color: "green", selected: true, class: "bg-primary-green" },
      { color: "blue", selected: true, class: "bg-primary-blue" },
      { color: "brown", selected: true, class: "bg-primary-foreground" },
    ],
    defaultVariants: {
      color: "red",
      selected: false,
    },
  },
);

export function FilterCard({
  icon: Icon,
  title,
  count,
  variant = "card",
  color = "red",
  selected = false,
  onClick,
}: FilterCardProps) {
  const accessibleLabel = `Filter tours by ${title}`;

  if (variant === "pill") {
    return (
      <button
        className={filterPillVariants({ color, selected })}
        onClick={onClick}
        aria-label={accessibleLabel}
        aria-pressed={selected}
      >
        {Icon && <Icon className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />}
        {title}
        {count !== undefined && <span className="opacity-70" aria-hidden="true">({count})</span>}
      </button>
    );
  }

  return (
    <button
      className={filterCardVariants({ color, selected })}
      onClick={onClick}
      aria-label={accessibleLabel}
      aria-pressed={selected}
    >
      {Icon && <Icon className="w-8 h-8" strokeWidth={2} aria-hidden="true" />}
      <span className=" font-bold text-xl flex items-center gap-1.5">
        <span aria-hidden="true">{title}</span>
        {count !== undefined && (
          <span className="font-extrabold opacity-70" aria-hidden="true">({count})</span>
        )}
      </span>
    </button>
  );
}