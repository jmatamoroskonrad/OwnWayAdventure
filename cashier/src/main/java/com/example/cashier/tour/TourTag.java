package com.example.cashier.tour;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class TourTag {
    private String label;
    private String variant;
}
