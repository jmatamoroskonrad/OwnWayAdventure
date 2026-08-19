import { DetailsHeroImage } from "@/components/details/DetailsHeroImage";
import { TourDescription } from "@/components/details/TourDescription";
import { BookTour } from "@/components/BookTour";
import { TourRecommendations } from "@/components/details/TourRecommendations";
export default function DetailsPage() {
  return (
    <div className="relative w-full h-full">
      <DetailsHeroImage />
      <TourDescription title="Arenal Lava & Forest Walk"/>
      <BookTour/>
      <TourRecommendations/>
    </div>
  );
}
