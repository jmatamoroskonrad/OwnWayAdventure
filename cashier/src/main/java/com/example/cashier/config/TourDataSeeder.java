package com.example.cashier.config;

import com.example.cashier.tour.Tour;
import com.example.cashier.tour.TourRepository;
import com.example.cashier.tour.TourSlot;
import com.example.cashier.tour.TourTag;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TourDataSeeder implements CommandLineRunner {

    private final TourRepository tourRepository;

    public TourDataSeeder(TourRepository tourRepository) {
        this.tourRepository = tourRepository;
    }

    @Override
    public void run(String... args) {
        if (tourRepository.count() > 0) {
            return;
        }

        tourRepository.save(buildHorsebackRidingTour());
        tourRepository.save(buildSlothWalkTour());
        tourRepository.save(buildNightWalkTour());
        tourRepository.save(buildVolcanoHikeTour());
    }

    private Tour buildHorsebackRidingTour() {
        Tour tour = new Tour();
        tour.setId("1");
        tour.setTitle("Horseback Riding Tour With River Crossing");
        tour.setDescription("Explore scenic rainforest trails, featuring an exciting river crossing where you can swim with your horse.");
        tour.setDuration("4");
        tour.setPrice(65);
        tour.setCategory("Adventure");
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setGoodToKnow("Wear closed shoes; the trail includes uneven volcanic rock. Bring water and sun protection.");
        tour.setImageUrl("/images/tours/tour1.jpeg");

        tour.setTags(List.of(
                buildTag("Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of("All", "Water"));

        tour.setSlots(List.of(
                buildSlot("8:00 AM", 10),
                buildSlot("12:00 MD", 10),
                buildSlot("03:00 PM", 10)
        ));

        return tour;
    }

    private Tour buildSlothWalkTour() {
        Tour tour = new Tour();
        tour.setId("2");
        tour.setTitle("Sloth Walk Observatory");
        tour.setDescription("Spot sloths guaranteed in their natural habitat from our specialized viewing observatory.");
        tour.setDuration("2");
        tour.setPrice(45);
        tour.setCategory("Wildlife");
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setGoodToKnow("Wear closed shoes; the trail includes uneven volcanic rock. Bring water and sun protection.");
        tour.setImageUrl("/images/tours/tour2.jpeg");

        tour.setTags(List.of(
                buildTag("Self Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of("All", "Water"));
        tour.setSlots(List.of());

        return tour;
    }

    private Tour buildNightWalkTour() {
        Tour tour = new Tour();
        tour.setId("3");
        tour.setTitle("Night Walk Tour");
        tour.setDescription("Rainforest trails and cooled lava flows on the volcano's north flank, read out loud by a guide who grew up beneath it.");
        tour.setDuration("2");
        tour.setPrice(40);
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setCategory("Wildlife");
        tour.setGoodToKnow("Wear closed shoes; the trail includes uneven volcanic rock. Bring water and sun protection.");
        tour.setImageUrl("/images/tours/tour3.jpg");

        tour.setTags(List.of(
                buildTag("Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of("All", "Water"));

        tour.setSlots(List.of(
                buildSlot("6:00 PM", 8),
                buildSlot("8:00 PM", 8)
        ));

        return tour;
    }

    private Tour buildVolcanoHikeTour() {
        Tour tour = new Tour();
        tour.setId("4");
        tour.setTitle("Arenal Volcano Hike");
        tour.setDescription("Embark on an immersive uphill trek through lush forest trails along the slopes of the iconic Arenal Volcano.");
        tour.setDuration("5");
        tour.setPrice(75);
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setCategory("Hiking");
        tour.setGoodToKnow("Wear closed shoes; the trail includes uneven volcanic rock. Bring water and sun protection.");
        tour.setImageUrl("/images/tours/tour4.jpeg");

        tour.setTags(List.of(
                buildTag("Self Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of("All", "Water"));
        tour.setSlots(List.of());

        return tour;
    }

    private TourTag buildTag(String label, String variant) {
        TourTag tag = new TourTag();
        tag.setLabel(label);
        tag.setVariant(variant);
        return tag;
    }

    private TourSlot buildSlot(String time, int spotsLeft) {
        TourSlot slot = new TourSlot();
        slot.setTime(time);
        slot.setSpotsLeft(spotsLeft);
        return slot;
    }
}