import HeroPlaceImage from "@/assets/hero/card-bg.jpeg";
import { NavLink } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export function DetailsHeroImage() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-1.5 cursor-pointer -mx-2 -mt-2  h-full">
      <Button
        asChild
        size="sm"
        effect="glow"
        className="absolute top-5 left-5 flex items-center gap-2.5 py-0 bg-primary-background/90 text-primary-foreground border border-primary-foreground/60 rounded-full px-4"
      >
        <NavLink to="/">
          <MoveLeft strokeWidth="3 " />
          Back to explore
        </NavLink>
      </Button>
      <img
        className=" w-full h-full object-cover"
        src={HeroPlaceImage}
        alt="product image"
      />
    </div>
  );
}
