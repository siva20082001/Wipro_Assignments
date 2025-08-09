package com.example.restaurantproducer;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestaurantProducerApplication {
    public static void main(String[] args) {
        SpringApplication.run(RestaurantProducerApplication.class, args);
    }
}


//http://localhost:8081/restaurants

//Use Postman to Test the API
//🔶 Test Restaurant Producer API:
//URL: http://localhost:8081/restaurants
//
//Method: GET
//
//Click Send
//
//Expected JSON response:
//
//json
//Copy code
//[
//  { "id": 1, "name": "Taj Hotel", "location": "Mumbai" },
//  { "id": 2, "name": "Paradise Biryani", "location": "Hyderabad" },
//  { "id": 3, "name": "ITC Grand", "location": "Delhi" }
//]
