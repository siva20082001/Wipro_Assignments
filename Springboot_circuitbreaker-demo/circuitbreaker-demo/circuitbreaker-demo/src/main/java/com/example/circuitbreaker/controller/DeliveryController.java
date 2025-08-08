package com.example.circuitbreaker.controller;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class DeliveryController {

    @Autowired
    private RestTemplate restTemplate;

    private static final String BASE_URL = "http://localhost:8081/delivery/status";
    private static final String CB_NAME = "deliveryService";

    @GetMapping("/order/check")
    @CircuitBreaker(name = CB_NAME, fallbackMethod = "fallbackMethod")
    public String checkDeliveryStatus() {
        return restTemplate.getForObject(BASE_URL, String.class);
    }

    public String fallbackMethod(Throwable e) {
        return "🚧 Delivery Service is DOWN. Please try again later.";
    }
}
