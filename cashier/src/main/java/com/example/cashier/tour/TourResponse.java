package com.example.cashier.tour;

import java.util.List;

public record TourResponse(
        String id,
        String title,
        String description,
        String duration,
        int price,
        boolean popular,
        int guests,
        String goodToKnow,
        String imageUrl,
        List<TourTag> tags,
        List<String> whatsIncluded,
        List<TourSlot> slots
) {
}
