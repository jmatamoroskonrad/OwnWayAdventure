import { Button } from "@/components/ui/button";
import type { AdminTourCardProps } from "./AdminTourCard.types";

export function AdminTourCard({ imageUrl, title, price, category, onDelete }: AdminTourCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-card-background border border-primary-foreground/10">
      <img src={imageUrl} alt={title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[16px] truncate">{title}</p>
        <p className="text-sm text-primary-foreground/60">{category} · ${price}</p>
      </div>
      <Button size="sm" variant="outline" className="text-primary-red border-primary-red/50 shrink-0" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
}