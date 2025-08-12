package com.example.producer.controller;

import com.example.producer.model.Ride;
import com.example.producer.service.RideProducerService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rides")
public class RideController {

    private final RideProducerService producerService;

    public RideController(RideProducerService producerService) {
        this.producerService = producerService;
    }

    @PostMapping
    public ResponseEntity<String> createRide(@RequestBody Ride ride) throws JsonProcessingException {
        ride.setOperation("CREATE");
        producerService.send(ride);
        return ResponseEntity.ok("CREATE message sent.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateRide(@PathVariable Long id, @RequestBody Ride ride) throws JsonProcessingException {
        ride.setId(id);
        ride.setOperation("UPDATE");
        producerService.send(ride);
        return ResponseEntity.ok("UPDATE message sent.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRide(@PathVariable Long id) throws JsonProcessingException {
        Ride r = new Ride();
        r.setId(id);
        r.setOperation("DELETE");
        producerService.send(r);
        return ResponseEntity.ok("DELETE message sent.");
    }
}
