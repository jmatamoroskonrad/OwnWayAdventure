package com.example.cashier.tour;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

import java.util.List;

public record CreateTourRequest(
        @NotBlank(message = "Title is required") String title,
        @NotBlank(message = "Description is required") String description,
        @NotBlank(message = "Duration is required") String duration,
        @Positive(message = "Price must be greater than zero") int price,
        boolean popular,
        @Positive(message = "Guests must be greater than zero") int guests,
        String goodToKnow,
        String imageUrl,
        @NotEmpty(message = "At least one tag is required") @Valid List<TourTagRequest> tags,
        List<String> whatsIncluded,
        @Valid List<TourSlotRequest> slots
) {
}
