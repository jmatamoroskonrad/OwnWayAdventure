package com.example.cashier.booking;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public record CreateBookingRequest(
        @NotBlank(message = "Tour id is required") String tourId,
        String slot,
        @Positive(message = "Guests must be greater than zero") int guests
) {
}
