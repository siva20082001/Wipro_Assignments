package com.example.restaurantconsumer.controller;

import com.example.restaurantconsumer.feign.RestaurantClient;
import com.example.restaurantconsumer.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consumer")
public class ConsumerController {

    @Autowired
    private RestaurantClient restaurantClient;

    @GetMapping("/restaurants")
    public List<Restaurant> getRestaurantsFromProducer() {
        return restaurantClient.getRestaurants();
    }
}
