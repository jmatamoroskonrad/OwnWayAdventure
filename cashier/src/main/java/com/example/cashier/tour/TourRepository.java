package com.example.cashier.tour;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourRepository extends JpaRepository<Tour, String> {
    List<Tour> findByCategory(String category);
}
