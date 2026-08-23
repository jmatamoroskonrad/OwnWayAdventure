package com.example.cashier.booking;

import com.example.cashier.tour.Tour;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "bookings")
@Getter
@Setter
public class Booking {

    @Id
    private String id = UUID.randomUUID().toString();

    @ManyToOne(optional = false)
    @JoinColumn(name = "tour_id", nullable = false)
    private Tour tour;

    @Column(nullable = false)
    private String slot;

    @Column(nullable = false)
    private int guests;
}
