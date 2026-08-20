import type { RitmoHeaderProps } from "./RitmoHeader.types"

export function RitmoHeader({toursCount, hoursCount}: RitmoHeaderProps) {
  
    return (
    <div className="flex flex-col overflow-auto py-5 px-4.5">
        <div className="flex flex-col gap-2.5">
            <span className="text-sm font-extrabold tracking-[0.18em] uppercase text-primary-foreground/45">My ritmo - La fortuna</span>
            <h1 className="font-bricolage font-extrabold text-[42px] leading-none tracking-[-0.03em] text-primary-foreground"> Your Days are taking shape</h1>
            <span className="text-[16px] font-semibold text-primary-foreground/60">{toursCount} experiences • {hoursCount} hours planned</span>
        </div>
      </div>
  )
}
