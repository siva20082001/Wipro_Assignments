package com.example.circuitbreaker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeliveryServiceController {

    @GetMapping("/delivery/status")
    public String getStatus() {
        return "✅ Delivery is on the way!";
    }
}
