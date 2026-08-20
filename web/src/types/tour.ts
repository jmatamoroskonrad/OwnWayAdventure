export type TourTag = {
  label: string;
  variant?: "outline" | "green" | "blue" | "brown";
};

export type TourSlot = {
  time: string;
  spotsLeft: number;
};

export type Tour = {
  id: string;
  title: string;
  description: string;
  tags: TourTag[];
  duration: string;
  price: number;
  popular: boolean;
  guests: number;
  goodToKnow: string;
  slots: TourSlot[];
  whatsIncluded: string[];
  imageUrl: string;
};