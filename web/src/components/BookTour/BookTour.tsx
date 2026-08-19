import { Button } from "../ui/button";

export function BookTour() {
  return (
    <div className="flex flex-col gap-5.5 p-5.5 rounded-[30px] bg-[repeating-radial-gradient(circle_at_100%_0%,rgba(237,234,208,0.07)_0px,rgba(237,234,208,0.07)_1px,transparent_1px,transparent_15px)] bg-[#211103] shadow-[rgba(33,17,3,0.3)_0px_22px_50px] text-primary-text">
      <div className="flex flex-col gap-6">
        <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-background/55">
          Choose a start time
        </span>
        <div className="flex gap-2.5 flex-wrap">
          <button className="px-5.5 py-4.25 rounded-[18px] border border-primary-background/55 bg-transparent text-primary-text font-bricolage text-[18px] font-extrabold cursor-pointer transition duration-300 text-left min-h-16 hover:scale-105">
            8:00 AM
            <span className="block text-[11.5px] font-semibold opacity-60 mt-0.75 text-primary-background">
              1 spots left
            </span>
          </button>
          <button className="px-5.5 py-4.25 rounded-[18px] border border-primary-background/55 bg-transparent text-primary-text font-bricolage text-[18px] font-extrabold cursor-pointer transition duration-300 text-left min-h-16 hover:scale-105">
            10:30 AM
            <span className="block text-[11.5px] font-semibold opacity-60 mt-0.75 text-primary-background">
              15 spots left
            </span>
          </button>
          <button className="px-5.5 py-4.25 rounded-[18px] border border-primary-background/55 bg-transparent text-primary-text font-bricolage text-[18px] font-extrabold cursor-pointer transition duration-300 text-left min-h-16 hover:scale-105">
            02:30 AM
            <span className="block text-[11.5px] font-semibold opacity-60 mt-0.75 text-primary-background">
              4 spots left
            </span>
          </button>
        </div>
        <div className="flex flex-wrap items-end gap-4.5">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-extrabold text-primary-background/55 leading-[0.16em] uppercase ">
              guest
            </p>
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-primary-background/10 border border-primary-background/18">
              <button className="w-13 h-13 border-0 rounded-full bg-primary-background/14 text-primary-background text-[22px] font-bold cursor-pointer">
                −
              </button>
              <span
                data-dc-tpl="307"
                className="min-w-11 text-center font-bricole font-extrabold text-[22px] text-primary-background"
              >
                <span>2</span>
              </span>
              <button className="w-13 h-13 border-0 rounded-full bg-primary-background text-primary-foreground text-[22px] font-bold cursor-pointer">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 ml-auto items-end">
            <span className="text-[12.5px] font-semibold text-primary-text/60">
              <span>$58 × 2 guests</span>
            </span>
            <span className="font-bricole font-extrabold text-[40px] tracking-[-0.02em] text-primary-text leading-none">
              <span>$116</span>
            </span>
          </div>
        </div>
        <Button>Make Reservation</Button>
      </div>
    </div>
  );
}
