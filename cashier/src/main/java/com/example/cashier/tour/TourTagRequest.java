package com.example.cashier.tour;

import jakarta.validation.constraints.NotBlank;

public record TourTagRequest(
        @NotBlank(message = "Tag label is required") String label,
        String variant
) {
}
