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

export function FilterCard({
  emoji,
  title,
  subtitle,
  color = "red",
  selected = false,
  onClick,
}: FilterCardProps) {
  return (
    <button
      className={filterCardVariants({ color, selected })}
      onClick={onClick}
    >
      <span data-dc-tpl="113" className="text-[26px]">
        {emoji}
      </span>
      <span className=" font-bold text-[17px]">{title}</span>
      <span className="text-[12px] opacity-60 font-semibold">{subtitle}</span>
    </button>
  );
}