package com.optionalemployee;

import java.util.Optional;

public class Employee {
    private int id;
    private String name;
    private Optional<String> email;
    private Optional<String> department;

    // Constructor with Optional fields
    public Employee(int id, String name, Optional<String> email, Optional<String> department) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.department = department;
    }

    // Safe accessors
    public String getEmailOrDefault() {
        return email.orElse("Email not provided");
    }

    public String getDepartmentOrThrow() {
        return department.orElseThrow(() -> 
            new MissingFieldException("Department is mandatory but missing."));
    }

    public void printDetails() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Email: " + getEmailOrDefault());
        System.out.println("Department: " + getDepartmentOrThrow());
    }
}
