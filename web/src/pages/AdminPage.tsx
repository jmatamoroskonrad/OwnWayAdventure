import { useTours } from "@/hooks/useTours";
import { AdminTourCard } from "@/components/admin/AdminTourCard";

export default function AdminPage() {
  const { tours, deleteTour } = useTours();

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this tour?")) return;
    await deleteTour(id);
  };

  return (
    <div className="flex flex-col gap-6 py-4">
      <h1 className="font-bricolage font-extrabold text-3xl">Manage tours</h1>

      <div className="flex flex-col gap-3">
        {tours.map((tour) => (
          <AdminTourCard
            key={tour.id}
            imageUrl={tour.imageUrl}
            title={tour.title}
            price={tour.price}
            category={tour.category}
            onDelete={() => handleDelete(tour.id)}
          />
        ))}
      </div>
    </div>
  );
}