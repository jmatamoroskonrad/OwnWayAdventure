package com.example.cashier.tour;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;

public record TourSlotRequest(
        @NotBlank(message = "Slot time is required") String time,
        @PositiveOrZero(message = "Spots left can't be negative") int spotsLeft
) {
}
