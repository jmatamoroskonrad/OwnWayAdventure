package com.example.cashier.common;

public class BookingNotFoundException extends RuntimeException {
    public BookingNotFoundException(String id) {
        super("Booking id " + id + " not found");
    }
}
