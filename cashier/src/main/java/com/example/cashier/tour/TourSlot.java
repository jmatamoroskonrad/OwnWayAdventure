package com.example.cashier.tour;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class TourSlot {
    private String time;
    private int spotsLeft;
}
