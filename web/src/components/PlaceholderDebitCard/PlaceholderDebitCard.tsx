    import { Wifi } from "lucide-react";

export function PlaceholderDebitCard() {
  return (
    <div className="relative w-full aspect-[1.586] rounded-[22px] p-6 flex flex-col justify-between bg-[repeating-radial-gradient(circle_at_100%_0%,rgba(237,234,208,0.07)_0px,rgba(237,234,208,0.07)_1px,transparent_1px,transparent_15px)] bg-[#211103] text-primary-text shadow-[rgba(33,17,3,0.3)_0px_22px_44px] overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="w-11 h-8 rounded-md bg-gradient-to-br from-primary-text/70 to-primary-text/40" />
        <Wifi className="rotate-90" size={22} strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[20px] tracking-[0.12em] font-bold">
          4242&nbsp;&nbsp;4242&nbsp;&nbsp;4242&nbsp;&nbsp;4242
        </span>
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-primary-text/50">Card holder</span>
            <span className="text-[13px] font-bold tracking-wide">Alex Rivera</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-primary-text/50">Expires</span>
            <span className="text-[13px] font-bold">12/29</span>
          </div>
        </div>
      </div>
    </div>
  );
}