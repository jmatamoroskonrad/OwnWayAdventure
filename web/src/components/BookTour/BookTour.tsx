import { useState } from "react";
import { Button } from "../ui/button";
import type { BookTourProps } from "./BookTours.types";

export function BookTour({ slots, price }: BookTourProps) {
  const [selectedSlot, setSelectedSlot] = useState(slots[0]?.time ?? "");
  const [guests, setGuests] = useState(1);
  const [reserved, setReserved] = useState(false);

  const currentSlot = slots.find((slot) => slot.time === selectedSlot);
  const maxGuests = currentSlot?.spotsLeft ?? 1;
  const atMaxGuests = guests >= maxGuests;

  const totalPrice = price * guests;

  const handleIncreaseGuests = () => {
    setGuests((current) => Math.min(maxGuests, current + 1));
  };

  const handleDecreaseGuests = () => {
    setGuests((current) => Math.max(1, current - 1));
  };

  const handleReserve = () => {
    const reservation = {
      startTime: selectedSlot,
      guests,
      totalPrice,
    };
    setReserved(true);
  };

  return (
    <div className="flex flex-col gap-5.5 p-5.5 rounded-[30px] bg-[repeating-radial-gradient(circle_at_100%_0%,rgba(237,234,208,0.07)_0px,rgba(237,234,208,0.07)_1px,transparent_1px,transparent_15px)] bg-[#211103] shadow-[rgba(33,17,3,0.3)_0px_22px_50px] text-primary-text">
      <div className="flex flex-col gap-6">
        <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary-background/55">
          Choose a start time
        </span>
        <div className="flex gap-2.5 flex-wrap">
          {slots.map((slot) => (
            <button key={slot.time} onClick={() => {
              setSelectedSlot(slot.time);
              setGuests((current) => Math.min(current, slot.spotsLeft));
            }} className={`px-5.5 py-4.25 rounded-[18px] border font-bricolage text-[18px] font-extrabold cursor-pointer transition duration-300 text-left min-h-16 hover:scale-105 ${slot.time === selectedSlot ? "scale-105 border-transparent bg-primary-background text-primary-foreground" : "border-primary-background/55 bg-transparent text-primary-text"}`}>
              {slot.time}
              <span className={`block text-[11.5px] font-semibold opacity-60 mt-0.75 ${slot.time === selectedSlot ? "text-primary-foreground" : "text-primary-background"}`}>
                {slot.spotsLeft} spots left
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-end gap-4.5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-extrabold text-primary-background/55 leading-[0.16em] uppercase ">
                guest
              </p>
              {atMaxGuests && (
                <span className="text-sm font-extrabold  text-primary-red leading-[0.16em] ">
                  Max {maxGuests} guest{maxGuests > 1 ? "s" : ""}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-primary-background/10 border border-primary-background/18">
              <button onClick={handleDecreaseGuests} disabled={guests <= 1} className="w-13 h-13 border-0 rounded-full bg-primary-background text-primary-foreground text-[22px] font-bold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
                −
              </button>
              <span
                data-dc-tpl="307"
                className="min-w-11 text-center font-bricole font-extrabold text-[22px] text-primary-background"
              >
                <span>{guests}</span>
              </span>
              <button onClick={handleIncreaseGuests} disabled={atMaxGuests} className="w-13 h-13 border-0 rounded-full bg-primary-background text-primary-foreground text-[22px] font-bold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 ml-auto items-end">
            <span className="text-[12.5px] font-semibold text-primary-text/60">
              <span>${price} × {guests} guests</span>
            </span>
            <span className="font-bricole font-extrabold text-[40px] tracking-[-0.02em] text-primary-text leading-none">
              <span>${totalPrice}</span>
            </span>
          </div>
        </div>
        <Button variant={reserved ? "success" : "primary"} onClick={handleReserve}>
          {reserved ? "On your Ritmo" : "Make Reservation"}
        </Button>
      </div>
    </div>
  );
}