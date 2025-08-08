package com.springlabs.labexercises.ex09_responsebody;

public class Product {

    private int id;
    private String name;
    private double price;

    // Constructors
    public Product() {}
    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Getters and setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}


//http://localhost:8080/ex09/product

//http://localhost:8080/ex09/hello