import { Button } from "@/components/ui/button";
import type { TourRecommendationsProps } from "./TourRecomendations.types";

export function TourRecommendations({ goodToKnow }: TourRecommendationsProps) {
  return (
    <div className="mt-6">
      <Button variant="outline" className="flex justify-between">
        {" "}
        Good to know before you go
        <span className="text-primary-red text-2xl">- </span>
      </Button>
      <p>{goodToKnow}</p>
    </div>
  );
}
