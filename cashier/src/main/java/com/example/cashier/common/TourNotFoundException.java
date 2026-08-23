package com.example.cashier.common;

public class TourNotFoundException extends RuntimeException {
    public TourNotFoundException(String id) {
        super("Tour id " + id + " not found");
    }
}
