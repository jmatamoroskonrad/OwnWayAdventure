package com.example.cashier.tour;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "tours")
@Getter
@Setter
public class Tour {

    @Id
    private String id = UUID.randomUUID().toString();

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(nullable = false)
    private String duration;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private boolean popular;

    @Column(nullable = false)
    private int guests;

    @Column(nullable = false)
    private String category;

    @Column(length = 2000)
    private String goodToKnow;

    @Column
    private String imageUrl;

    @ElementCollection
    @CollectionTable(name = "tour_tags", joinColumns = @JoinColumn(name = "tour_id"))
    private List<TourTag> tags;

    @ElementCollection
    @CollectionTable(name = "tour_included", joinColumns = @JoinColumn(name = "tour_id"))
    @Column(name = "item")
    private List<String> whatsIncluded;

    @ElementCollection
    @CollectionTable(name = "tour_slots", joinColumns = @JoinColumn(name = "tour_id"))
    private List<TourSlot> slots;
}
