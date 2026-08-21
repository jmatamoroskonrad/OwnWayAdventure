import type { TourTag, TourSlot } from "@/types/tour";

export type TourCardProps = {
  id: string;
  title: string;
  description: string;
  tags: TourTag[];
  price: number;
  popular?: boolean;
  imageUrl: string;
  slots: TourSlot[];
};