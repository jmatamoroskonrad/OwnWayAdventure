package com.example.cashier.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        List<ApiError> errors = ex.getBindingResult().getFieldErrors().stream()
            .map(fieldError -> new ApiError("E001", fieldError.getDefaultMessage()))
            .toList();
        return new ApiErrorResponse(errors);
    }

    @ExceptionHandler(TourNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiErrorResponse handleTourNotFound(TourNotFoundException ex) {
        return new ApiErrorResponse(List.of(new ApiError("E002", ex.getMessage())));
    }

    @ExceptionHandler(BookingNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiErrorResponse handleBookingNotFound(BookingNotFoundException ex) {
        return new ApiErrorResponse(List.of(new ApiError("E002", ex.getMessage())));
    }

    @ExceptionHandler(InsufficientCapacityException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ApiErrorResponse handleInsufficientCapacity(InsufficientCapacityException ex) {
        return new ApiErrorResponse(List.of(new ApiError("E004", ex.getMessage())));
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ApiErrorResponse handleUnexpected(Exception ex) {
        return new ApiErrorResponse(List.of(new ApiError("E003", "Unexpected Server Error")));
    }
}
