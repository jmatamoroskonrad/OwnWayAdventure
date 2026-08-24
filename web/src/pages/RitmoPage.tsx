import { useState } from "react";
import { RitmoHeader } from "@/components/ritmo/RitmoHeader";
import { formatToLongDate, parseTimeToMinutes } from "@/utils/dateUtils";
import { TimeLine } from "@/components/ritmo/TimeLine";
import { RitmoSummaryBar } from "@/components/ritmo/RitmoSummaryBar";
import { BookTourPopover } from "@/components/BookTour";
import { PaymentModal } from "@/components/PaymentModal";
import { useRitmo } from "@/hooks/useRitmo";
import { useTours } from "@/hooks/useTours";
import { useRitmoSummary } from "@/hooks/useRitmoSummary";

export default function RitmoPage() {
  const today: string = formatToLongDate();
  const { bookings, removeBooking, updateBooking } = useRitmo();
  const { getTourById } = useTours();
  const { experienceCount, hoursPlanned, guestCount, total } =
    useRitmoSummary();
  const [editingTourId, setEditingTourId] = useState<string | null>(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const getSortValue = (slot: string) => (slot ? parseTimeToMinutes(slot) : Infinity);
  const sortedBookings = [...bookings].sort(
    (a, b) => getSortValue(a.slot) - getSortValue(b.slot),
  );

  const editingTour = editingTourId ? getTourById(editingTourId) : undefined;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <RitmoHeader toursCount={experienceCount} hoursCount={hoursPlanned} />
        <div className="flex items-center gap-3.5 pt-3.5 pb-1.5 px-2 tablet:max-w-200">
          <span className="font-bricolage font-extrabold text-2xl tracking-[-0.01em] text-primary-foreground">
            {today}
          </span>
          <span className="flex-1 h-px bg-[repeating-linear-gradient(90deg,rgba(33,17,3,0.22)_0px,rgba(33,17,3,0.22)_6px,transparent_6px,transparent_12px)]"></span>
          <span className="font-bricolage font-extrabold text-xl ">
            ${total}
          </span>
        </div>
        {sortedBookings.length === 0 && <TimeLine time="9:00 AM" />}
        {sortedBookings.map((booking) => {
          const tour = getTourById(booking.tourId);
          if (!tour) return null;
          return (
            <TimeLine
              key={booking.bookingId}
              time={booking.slot || "TBD"}
              activity={{
                image: tour.imageUrl,
                price: tour.price * booking.guests,
                badge: tour.tags[0]?.label ?? "Tour",
                title: tour.title,
                duration: `${tour.duration} hours`,
                guests: booking.guests,
              }}
              onEdit={() => setEditingTourId(booking.tourId)}
              onRemove={() => removeBooking(booking.bookingId)}
              onSetTime={(time) => updateBooking(booking.bookingId, { slot: time })}
            />
          );
        })}
      </div>
      <RitmoSummaryBar
        experienceCount={experienceCount}
        hoursPlanned={hoursPlanned}
        guestCount={guestCount}
        total={total}
        paid={isPaid}
        onConfirm={() => setIsPaymentOpen(true)}
      />
      {editingTour && (
        <BookTourPopover
          open={Boolean(editingTour)}
          tourId={editingTour.id}
          slots={editingTour.slots}
          price={editingTour.price}
          onClose={() => setEditingTourId(null)}
        />
      )}
      <PaymentModal
        open={isPaymentOpen}
        total={total}
        onClose={() => setIsPaymentOpen(false)}
        onPaid={() => setIsPaid(true)}
      />
    </div>
  );
}