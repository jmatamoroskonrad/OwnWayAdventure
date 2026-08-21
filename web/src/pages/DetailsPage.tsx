import { useParams } from "react-router-dom";
import { DetailsHeroImage } from "@/components/details/DetailsHeroImage";
import { TourDescription } from "@/components/details/TourDescription";
import { BookTour } from "@/components/BookTour";
import { TourRecommendations } from "@/components/details/TourRecommendations";
import { useTours } from "@/hooks/useTours";



export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const  {getTourById} = useTours();
  const tour = getTourById(id ?? "")

  if (!tour) {
    return null;
  }

  return (
    <div className="relative w-full h-full ">
      <DetailsHeroImage imageUrl={tour.imageUrl}/>
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