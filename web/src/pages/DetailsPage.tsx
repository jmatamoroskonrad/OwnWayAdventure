import { useParams } from "react-router-dom";
import { DetailsHeroImage } from "@/components/details/DetailsHeroImage";
import { TourDescription } from "@/components/details/TourDescription";
import { BookTour } from "@/components/BookTour";
import { TourRecommendations } from "@/components/details/TourRecommendations";
import toursMock from "@/mocks/tours.json";
import type { Tour } from "@/types/tour";

const tours = toursMock as Tour[];

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return null;
  }

  return (
    <div className="relative w-full h-full">
      <DetailsHeroImage />
      <TourDescription
        title={tour.title}
        description={tour.description}
        tags={tour.tags}
        whatsIncluded={tour.whatsIncluded}
      />
      <BookTour slots={tour.slots} price={tour.price} />
      <TourRecommendations goodToKnow={tour.goodToKnow} />
    </div>
  );
}