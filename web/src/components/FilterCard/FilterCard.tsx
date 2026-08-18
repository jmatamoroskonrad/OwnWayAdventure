import type { FilterCardProps } from "./FilterCard.types";

export function FilterCard({ emoji, title, subtitle, onClick }: FilterCardProps) {
  return (
    <button
      className="scroll-mt-0 snap-start shrink-0 flex flex-col gap-1.5 items-start justify-end p-5 w-49 min-h-37 rounded-3xl cursor-pointer transition-transform duration-200 text-left  border-[1.5px] border-transparent bg-[repeating-radial-gradient(circle_at_90%_130%,rgba(237,234,208,0.16)_0px,rgba(237,234,208,0.16)_1px,transparent_1px,transparent_13px)] bg-[#8f1524] text-[#edead0] translate-y-0.75 shadow-[rgba(33,17,3,0.26)_0px_14px_30px]"
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
