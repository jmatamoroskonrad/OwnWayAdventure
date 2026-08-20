import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { TourRecommendationsProps } from "./TourRecommendations.types";

export function TourRecommendations({ goodToKnow }: TourRecommendationsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 flex flex-col gap-4 pb-8">
      <Button 
        variant="outline" 
        className="flex justify-between items-center w-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Good to know before you go
        <span className="text-primary-red text-2xl font-mono">
          {isOpen ? "−" : "+"}
        </span>
      </Button>
      
      {isOpen && (
        <div className="flex flex-col p-5 rounded-2xl bg-primary-foreground/5 leading-[1.6] text-primary-foreground animate-in fade-in duration-200">
          <p className="whitespace-pre-line">{goodToKnow}</p>
        </div>
      )}
    </div>
  );
}
