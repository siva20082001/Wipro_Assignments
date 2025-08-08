package com.springlabs.labexercises.ex11_restcontroller;

public class Employee {

    private int id;
    private String name;
    private double salary;

    // Constructors
    public Employee() {}

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Getters and setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }
}


//http://localhost:8080/ex11/employee

//http://localhost:8080/ex11/employees