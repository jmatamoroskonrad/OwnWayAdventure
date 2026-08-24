package com.example.cashier.tour;

import com.example.cashier.common.TourNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourService {

    private final TourRepository tourRepository;

    public TourService(TourRepository tourRepository) {
        this.tourRepository = tourRepository;
    }

    public List<TourResponse> findAll(String category) {
        List<Tour> tours = (category == null || category.isBlank())
                ? tourRepository.findAll()
                : tourRepository.findByCategory(category);
        return tours.stream().map(this::toResponse).toList();
    }

    public TourResponse findById(String id) {
        return toResponse(findEntityById(id));
    }

    public TourResponse create(CreateTourRequest request) {
        Tour tour = new Tour();
        applyRequest(tour, request);
        return toResponse(tourRepository.save(tour));
    }

    public TourResponse update(String id, CreateTourRequest request) {
        Tour tour = findEntityById(id);
        applyRequest(tour, request);
        return toResponse(tourRepository.save(tour));
    }

    public void delete(String id) {
        Tour tour = findEntityById(id);
        tourRepository.delete(tour);
    }

    public Tour findEntityById(String id) {
        return tourRepository.findById(id)
                .orElseThrow(() -> new TourNotFoundException(id));
    }

    private void applyRequest(Tour tour, CreateTourRequest request) {
        tour.setTitle(request.title());
        tour.setDescription(request.description());
        tour.setDuration(request.duration());
        tour.setPrice(request.price());
        tour.setPopular(request.popular());
        tour.setGuests(request.guests());
        tour.setCategory(request.category());
        tour.setGoodToKnow(request.goodToKnow());
        tour.setImageUrl(request.imageUrl());

        tour.setTags(request.tags().stream()
                .map(t -> {
                    TourTag tag = new TourTag();
                    tag.setLabel(t.label());
                    tag.setVariant(t.variant());
                    return tag;
                }).toList());

        tour.setWhatsIncluded(request.whatsIncluded());

        tour.setSlots(request.slots() == null ? List.of() : request.slots().stream()
                .map(s -> {
                    TourSlot slot = new TourSlot();
                    slot.setTime(s.time());
                    slot.setSpotsLeft(s.spotsLeft());
                    return slot;
                }).toList());
    }

    private TourResponse toResponse(Tour tour) {
        return new TourResponse(
                tour.getId(),
                tour.getTitle(),
                tour.getDescription(),
                tour.getDuration(),
                tour.getPrice(),
                tour.isPopular(),
                tour.getGuests(),
                tour.getCategory(),
                tour.getGoodToKnow(),
                tour.getImageUrl(),
                tour.getTags(),
                tour.getWhatsIncluded(),
                tour.getSlots()
        );
    }
}