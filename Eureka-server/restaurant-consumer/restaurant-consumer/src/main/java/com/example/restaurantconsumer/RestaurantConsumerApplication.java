package com.example.restaurantconsumer;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class RestaurantConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(RestaurantConsumerApplication.class, args);
    }
}


//http://localhost:8082/consumer/restaurants
//Method: GET
//
//Click Send