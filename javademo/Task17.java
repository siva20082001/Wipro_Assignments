package com.javademo;

//Base class
class Vehicle {
 protected String color;
 protected int wheels;
 protected String model;

 public Vehicle(String color, int wheels, String model) {
     this.color = color;
     this.wheels = wheels;
     this.model = model;
 }

 public void displayInfo() {
     System.out.println("Model: " + model);
     System.out.println("Color: " + color);
     System.out.println("Wheels: " + wheels);
 }
}

//Truck subclass
class Truck extends Vehicle {
 private int loadCapacity;

 public Truck(String color, int wheels, String model, int loadCapacity) {
     super(color, wheels, model);
     this.loadCapacity = loadCapacity;
 }

 public void displayTruckInfo() {
     System.out.println("Truck Info:");
     displayInfo();
     System.out.println("Load Capacity: " + loadCapacity + " tons");
     System.out.println();
 }
}

//Bus subclass
class Bus extends Vehicle {
 private int seatingCapacity;

 public Bus(String color, int wheels, String model, int seatingCapacity) {
     super(color, wheels, model);
     this.seatingCapacity = seatingCapacity;
 }

 public void displayBusInfo() {
     System.out.println("Bus Info:");
     displayInfo();
     System.out.println("Seating Capacity: " + seatingCapacity);
     System.out.println();
 }
}

//Car subclass
class Car extends Vehicle {
 private boolean isAutomatic;

 public Car(String color, int wheels, String model, boolean isAutomatic) {
     super(color, wheels, model);
     this.isAutomatic = isAutomatic;
 }

 public void displayCarInfo() {
     System.out.println("Car Info:");
     displayInfo();
     System.out.println("Transmission: " + (isAutomatic ? "Automatic" : "Manual"));
     System.out.println();
 }
}

//Main class as per task number
public class Task17 {
 public static void main(String[] args) {
     Truck truck = new Truck("Red", 6, "TATA Hauler", 15);
     Bus bus = new Bus("Blue", 4, "Volvo B9R", 50);
     Car car = new Car("Black", 4, "Honda City", true);

     truck.displayTruckInfo();
     bus.displayBusInfo();
     car.displayCarInfo();
 }
}

