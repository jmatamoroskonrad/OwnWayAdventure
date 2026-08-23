package com.example.cashier.booking;

public record BookingResponse(
        String bookingId,
        String tourId,
        String slot,
        int guests
) {
}
