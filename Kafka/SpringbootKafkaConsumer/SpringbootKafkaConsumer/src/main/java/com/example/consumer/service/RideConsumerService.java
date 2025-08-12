package com.example.consumer.service;

import com.example.consumer.model.Ride;
import com.example.consumer.repository.RideRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class RideConsumerService {

    private final RideRepository rideRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public RideConsumerService(RideRepository rideRepository) {
        this.rideRepository = rideRepository;
    }

    @KafkaListener(topics = "uber-ride-topic", groupId = "uber_ride_group")
    public void listen(String message) {
        try {
            Ride incoming = objectMapper.readValue(message, Ride.class);
            String op = (incoming.getOperation() == null) ? "CREATE" : incoming.getOperation().toUpperCase();

            switch (op) {
                case "CREATE":
                    // if id exists, this will update; that's fine for lab purposes
                    rideRepository.save(incoming);
                    break;
                case "UPDATE":
                    if (incoming.getId() != null && rideRepository.existsById(incoming.getId())) {
                        rideRepository.save(incoming);
                    } else {
                        // optionally create if not exists
                        rideRepository.save(incoming);
                    }
                    break;
                case "DELETE":
                    if (incoming.getId() != null && rideRepository.existsById(incoming.getId())) {
                        rideRepository.deleteById(incoming.getId());
                    }
                    break;
                default:
                    // ignore unknown operations
            }
        } catch (Exception e) {
            e.printStackTrace();
            // in production, send to dead-letter or log properly
        }
    }
}
