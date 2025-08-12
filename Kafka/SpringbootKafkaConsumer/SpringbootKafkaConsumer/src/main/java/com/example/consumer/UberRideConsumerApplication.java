package com.example.consumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UberRideConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(UberRideConsumerApplication.class, args);
    }
}
/*
Create a Ride
POST → http://localhost:8081/rides
{
	  "id": 1,
	  "driverName": "John Doe",
	  "passengerName": "Alice",
	  "pickupLocation": "Airport",
	  "dropLocation": "Downtown",
	  "fare": 250.0
	}
= create msg sent


Update a Ride
PUT → http://localhost:8081/rides/1
{
	  "driverName": "John Doe Updated",
	  "passengerName": "Alice",
	  "pickupLocation": "Airport",
	  "dropLocation": "Downtown",
	  "fare": 280.0
	}
=UPDATE message sent.

Delete a Ride
DELETE → http://localhost:8081/rides/1
	
=DELETE message sent.
---------------------------------
SQL SELECT * FROM rides;
GET → http://localhost:8082/rides → List all rides from MySQL.
GET → http://localhost:8082/rides/1 → Get ride details.

*/
