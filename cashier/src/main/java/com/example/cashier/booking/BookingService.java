package com.example.cashier.booking;

import com.example.cashier.common.BookingNotFoundException;
import com.example.cashier.common.InsufficientCapacityException;
import com.example.cashier.tour.Tour;
import com.example.cashier.tour.TourService;
import com.example.cashier.tour.TourSlot;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private static final int NO_SLOTS_MAX_GUESTS = 15;

    private final BookingRepository bookingRepository;
    private final TourService tourService;

    public BookingService(BookingRepository bookingRepository, TourService tourService) {
        this.bookingRepository = bookingRepository;
        this.tourService = tourService;
    }

    public List<BookingResponse> findAll() {
        return bookingRepository.findAll().stream().map(this::toResponse).toList();
    }

    @Transactional
    public BookingResponse create(CreateBookingRequest request) {
        Tour tour = tourService.findEntityById(request.tourId());
        reserveCapacity(tour, request.slot(), request.guests());

        Booking booking = new Booking();
        booking.setTour(tour);
        booking.setSlot(request.slot());
        booking.setGuests(request.guests());

        return toResponse(bookingRepository.save(booking));
    }

    @Transactional
    public BookingResponse update(String bookingId, UpdateBookingRequest request) {
        Booking booking = findEntityById(bookingId);
        Tour tour = booking.getTour();

        releaseCapacity(tour, booking.getSlot(), booking.getGuests());
        reserveCapacity(tour, request.slot(), request.guests());

        booking.setSlot(request.slot());
        booking.setGuests(request.guests());

        return toResponse(bookingRepository.save(booking));
    }

    @Transactional
    public void delete(String bookingId) {
        Booking booking = findEntityById(bookingId);
        releaseCapacity(booking.getTour(), booking.getSlot(), booking.getGuests());
        bookingRepository.delete(booking);
    }

    private Booking findEntityById(String bookingId) {
        return bookingRepository.findById(bookingId)
                .orElseThrow(() -> new BookingNotFoundException(bookingId));
    }

    private void reserveCapacity(Tour tour, String slotTime, int guests) {
        Optional<TourSlot> matchedSlot = findSlot(tour, slotTime);

        if (matchedSlot.isPresent()) {
            TourSlot slot = matchedSlot.get();
            if (slot.getSpotsLeft() < guests) {
                throw new InsufficientCapacityException(
                        "Not enough spots left for slot " + slot.getTime());
            }
            slot.setSpotsLeft(slot.getSpotsLeft() - guests);
        } else if (!tour.getSlots().isEmpty()) {
            throw new InsufficientCapacityException("Slot " + slotTime + " does not exist for this tour");
        } else if (guests > NO_SLOTS_MAX_GUESTS) {
            throw new InsufficientCapacityException(
                    "This tour allows a maximum of " + NO_SLOTS_MAX_GUESTS + " guests");
        }
    }

    private void releaseCapacity(Tour tour, String slotTime, int guests) {
        findSlot(tour, slotTime).ifPresent(slot -> slot.setSpotsLeft(slot.getSpotsLeft() + guests));
    }

    private Optional<TourSlot> findSlot(Tour tour, String slotTime) {
        return tour.getSlots().stream()
                .filter(slot -> slot.getTime().equals(slotTime))
                .findFirst();
    }

    private BookingResponse toResponse(Booking booking) {
        return new BookingResponse(
                booking.getId(),
                booking.getTour().getId(),
                booking.getSlot(),
                booking.getGuests()
        );
    }
}
