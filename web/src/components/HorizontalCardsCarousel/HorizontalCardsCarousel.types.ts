import type { FilterCardVariant } from "@/components/FilterCard";

export type HorizontalCardsCarouselProps = {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  variant?: FilterCardVariant;
};