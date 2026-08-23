package com.example.cashier.booking;

import jakarta.validation.constraints.Positive;

public record UpdateBookingRequest(
        String slot,
        @Positive(message = "Guests must be greater than zero") int guests
) {
}
