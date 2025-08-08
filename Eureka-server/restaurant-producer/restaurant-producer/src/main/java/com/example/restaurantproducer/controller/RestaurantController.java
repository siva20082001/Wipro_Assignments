package com.example.restaurantproducer.controller;

import com.example.restaurantproducer.model.Restaurant;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestaurantController {

    @GetMapping("/restaurants")
    public List<Restaurant> getRestaurants() {
        return List.of(
            new Restaurant(1, "Taj Hotel", "Mumbai"),
            new Restaurant(2, "Paradise Biryani", "Hyderabad"),
            new Restaurant(3, "ITC Grand", "Delhi")
        );
    }
}
