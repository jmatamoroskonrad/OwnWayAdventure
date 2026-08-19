import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FilterCard } from "@/components/FilterCard";
import filterCardsMock from "@/mocks/filterCards.json";
import type { FilterCardProps } from "@/components/FilterCard";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

export function HorizontalCardsCarousel() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <div className="w-full max-w-6xl mx-auto px-1 text-black py-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4 ">
        <div className="flex flex-col">
          <h2 className="font-bricolage font-extrabold text-3xl tracking-tight ">What is calling you?</h2>
          <span className="text-sm text-primary-foreground/75">Swipe into our experiences in La Fortuna</span>
        </div>
        <div className="flex gap-2">
          <button className="prev-btn flex items-center justify-center w-11 h-11 rounded-full border-2 border-primary-foreground/60  \ hover:bg-primary-background/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="next-btn flex items-center justify-center w-11 h-11 rounded-full border-2 border-primary-foreground/60  \ hover:bg-primary-background/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        spaceBetween={16}
        slidesPerView="auto"
        className="w-full overflow-visible!"
      >
        {filterCardsMock.map((card) => (
          <SwiperSlide key={card.id} className="w-auto!">
            <FilterCard
              emoji={card.emoji}
              title={card.title}
              subtitle={card.subtitle}
              color={card.color as FilterCardProps["color"]}
              selected={selectedId === card.id}
              onClick={() =>
                setSelectedId(card.id === selectedId ? null : card.id)
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}