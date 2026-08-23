package com.example.cashier.booking;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public List<BookingResponse> list() {
        return bookingService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BookingResponse create(@Valid @RequestBody CreateBookingRequest request) {
        return bookingService.create(request);
    }

    @PatchMapping("/{id}")
    public BookingResponse update(@PathVariable String id, @Valid @RequestBody UpdateBookingRequest request) {
        return bookingService.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        bookingService.delete(id);
    }
}
