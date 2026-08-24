package com.example.cashier.tour;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tours")
public class TourController {

    private final TourService tourService;

    public TourController(TourService tourService) {
        this.tourService = tourService;
    }

    @GetMapping
    public List<TourResponse> list(@RequestParam(required = false) String category) {
        return tourService.findAll(category);
    }

    @GetMapping("/{id}")
    public TourResponse getOne(@PathVariable String id) {
        return tourService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TourResponse create(@Valid @RequestBody CreateTourRequest request) {
        return tourService.create(request);
    }

    @PutMapping("/{id}")
    public TourResponse update(@PathVariable String id, @Valid @RequestBody CreateTourRequest request) {
        return tourService.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        tourService.delete(id);
    }
}
