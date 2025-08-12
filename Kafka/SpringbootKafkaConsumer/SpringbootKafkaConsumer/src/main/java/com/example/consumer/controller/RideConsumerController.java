package com.example.consumer.controller;

import com.example.consumer.model.Ride;
import com.example.consumer.repository.RideRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rides")
public class RideConsumerController {

    private final RideRepository repository;

    public RideConsumerController(RideRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Ride> all() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ride> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
