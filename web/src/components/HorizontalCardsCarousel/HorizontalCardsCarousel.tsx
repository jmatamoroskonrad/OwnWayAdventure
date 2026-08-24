import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FilterCard } from "@/components/FilterCard";
import { CATEGORY_META, DEFAULT_CATEGORY_META } from "@/data/tourCategories";
import { useMemo } from "react";
import { useTours } from "@/hooks/useTours";
import type { HorizontalCardsCarouselProps } from "./HorizontalCardsCarousel.types";
import "swiper/css";
import "swiper/css/navigation";

export function HorizontalCardsCarousel({
  selectedCategory,
  onSelectCategory,
  variant = "card",
}: HorizontalCardsCarouselProps) {
  const { tours } = useTours();

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    tours.forEach((tour) => {
      if (!tour.category) return;
      counts.set(tour.category, (counts.get(tour.category) ?? 0) + 1);
    });

    return Array.from(counts.entries()).map(([category, count]) => {
      const meta = CATEGORY_META[category] ?? DEFAULT_CATEGORY_META;
      return { title: category, count, ...meta };
    });
  }, [tours]);

  return (
    <div className="w-full mx-auto px-1 text-black py-4 overflow-hidden">
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
        {categories.map((category) => (
          <SwiperSlide key={category.title} className="w-auto!">
            <FilterCard
              variant={variant}
              icon={category.icon}
              title={category.title}
              count={category.count}
              color={category.color}
              selected={selectedCategory === category.title}
              onClick={() =>
                onSelectCategory(category.title === selectedCategory ? null : category.title)
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}