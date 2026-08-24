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
        tourRepository.save(buildLaFortunaWaterfallTour());
        tourRepository.save(buildAtvTour());
        tourRepository.save(buildZiplineTour());
        tourRepository.save(buildHangingBridgesTour());
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
        tour.setGoodToKnow("Wear long pants and closed-toe shoes. Riders should feel comfortable around horses; there's a weight limit of 220 lbs (100 kg). You will get wet during the river crossing, so bring a change of clothes.");
        tour.setImageUrl("/images/tours/tour1.jpeg");

        tour.setTags(List.of(
                buildTag("Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of(
                "Certified horseback guide",
                "Horse and riding equipment",
                "River crossing safety gear",
                "Bottled water",
                "Hotel pickup and drop-off"
        ));

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
        tour.setGoodToKnow("Wear comfortable walking shoes and bring insect repellent. Sloth sightings are common but not guaranteed on every visit — a camera with zoom gets the best photos.");
        tour.setImageUrl("/images/tours/tour2.jpeg");

        tour.setTags(List.of(
                buildTag("Self Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of(
                "Naturalist guide",
                "Entrance to the observatory",
                "Binoculars",
                "Bottled water",
                "Hotel pickup and drop-off"
        ));
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
        tour.setGoodToKnow("Wear long sleeves and pants to avoid insect bites, plus closed-toe shoes. The walk starts at dusk — arrive a few minutes early. Not recommended for guests with severe insect allergies.");
        tour.setImageUrl("/images/tours/tour3.jpg");

        tour.setTags(List.of(
                buildTag("Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of(
                "Certified naturalist guide",
                "Flashlight",
                "Rubber boots (if needed)",
                "Bottled water",
                "Hotel pickup and drop-off"
        ));

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
        tour.setCategory("Hiking");
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setGoodToKnow("Requires a moderate to good fitness level; the trail includes steep, uneven volcanic terrain. Wear sturdy hiking shoes and sun protection, and check the weather — trails can get muddy after rain.");
        tour.setImageUrl("/images/tours/tour4.jpeg");

        tour.setTags(List.of(
                buildTag("Self Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of(
                "Certified hiking guide",
                "Trekking poles",
                "Bottled water and snack",
                "Entrance fees",
                "Hotel pickup and drop-off"
        ));
        tour.setSlots(List.of());

        return tour;
    }

    private Tour buildLaFortunaWaterfallTour() {
        Tour tour = new Tour();
        tour.setId("5");
        tour.setTitle("La Fortuna Waterfall");
        tour.setDescription("Descend more than 500 steps through the rainforest to the base of the iconic La Fortuna waterfall, with a swimming area at the bottom.");
        tour.setDuration("3");
        tour.setPrice(25);
        tour.setCategory("Hiking");
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setGoodToKnow("The staircase down is steep with over 500 steps; expect the climb back up to be strenuous. Wear closed-toe shoes with good grip and bring a swimsuit and towel.");
        tour.setImageUrl("/images/tours/tour5.jpg");

        tour.setTags(List.of(
                buildTag("Self Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of(
                "Entrance fee",
                "Locker access",
                "Bottled water",
                "Hotel pickup and drop-off"
        ));
        tour.setSlots(List.of());

        return tour;
    }

    private Tour buildAtvTour() {
        Tour tour = new Tour();
        tour.setId("6");
        tour.setTitle("ATV Adventure Tour");
        tour.setDescription("Ride through backroads, rivers, and farmland around the Arenal Volcano on a guided ATV excursion.");
        tour.setDuration("3");
        tour.setPrice(70);
        tour.setCategory("Adventure");
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setGoodToKnow("A valid driver's license is required to drive; passengers do not need one. Expect mud and water splashes — wear clothes you don't mind getting dirty.");
        tour.setImageUrl("/images/tours/tour6.webp");

        tour.setTags(List.of(
                buildTag("Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of(
                "Certified guide",
                "ATV and safety gear",
                "Bottled water",
                "Hotel pickup and drop-off"
        ));

         tour.setSlots(List.of(
                buildSlot("10:00 MD", 10),
                buildSlot("01:00 PM", 10)
        ));

        return tour;
    }

    private Tour buildZiplineTour() {
        Tour tour = new Tour();
        tour.setId("7");
        tour.setTitle("Zipline Canopy Tour");
        tour.setDescription("Soar above the rainforest canopy on a series of ziplines with views of Arenal Volcano along the way.");
        tour.setDuration("3");
        tour.setPrice(60);
        tour.setCategory("Adventure");
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setGoodToKnow("Weight limits typically apply (around 250 lbs / 113 kg). Wear closed-toe shoes and clothes you can move freely in; not recommended for guests with heart conditions or fear of heights.");
        tour.setImageUrl("/images/tours/tour7.jpg");

        tour.setTags(List.of(
                buildTag("Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of(
                "Certified guide",
                "Safety harness and gear",
                "Bottled water",
                "Hotel pickup and drop-off"
        ));
        tour.setSlots(List.of());

        return tour;
    }

    private Tour buildHangingBridgesTour() {
        Tour tour = new Tour();
        tour.setId("8");
        tour.setTitle("Hanging Bridges Walk");
        tour.setDescription("Walk a network of suspended bridges through the rainforest canopy for close-up views of wildlife and the forest ecosystem.");
        tour.setDuration("2");
        tour.setPrice(35);
        tour.setCategory("Hiking");
        tour.setPopular(true);
        tour.setGuests(2);
        tour.setGoodToKnow("The trail is mostly flat with some inclines and steps at the bridge access points. Wear comfortable walking shoes and bring insect repellent.");
        tour.setImageUrl("/images/tours/tour8.webp");

        tour.setTags(List.of(
                buildTag("Self Guide", "green"),
                buildTag("Moderate", null),
                buildTag("3 hours", null)
        ));

        tour.setWhatsIncluded(List.of(
                "Entrance fee",
                "Trail map",
                "Bottled water",
                "Hotel pickup and drop-off"
        ));
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