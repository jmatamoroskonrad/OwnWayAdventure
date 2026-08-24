import { PawPrint, Compass, Mountain, Sparkles, type LucideIcon } from "lucide-react";
import type { FilterCardProps } from "@/components/FilterCard";

export type CategoryMeta = {
  icon: LucideIcon;
  color: FilterCardProps["color"];
};

export const CATEGORY_META: Record<string, CategoryMeta> = {
  Wildlife: { icon: PawPrint, color: "green" },
  Adventure: { icon: Compass, color: "brown" },
  Hiking: { icon: Mountain, color: "red" },
};

export const DEFAULT_CATEGORY_META: CategoryMeta = {
  icon: Sparkles,
  color: "red",
};