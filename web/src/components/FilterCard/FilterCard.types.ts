import type { LucideIcon } from "lucide-react";

export type FilterCardColor = "red" | "blue" | "green" | "brown";
export type FilterCardVariant = "card" | "pill";

export type FilterCardProps = {
  icon?: LucideIcon;
  title: string;
  onClick?: () => void;
  color?: FilterCardColor;
  count?: number;
  variant?: FilterCardVariant;
  selected?: boolean;
};