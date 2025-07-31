package com.optionalemployee;

import java.util.Optional;

public class Task49 {
    public static void main(String[] args) {
        // Case 1: Complete data
        Employee emp1 = new Employee(101, "Alice", 
                        Optional.of("alice@example.com"), 
                        Optional.of("HR"));
        emp1.printDetails();

        System.out.println("-----------");

        // Case 2: Missing email
        Employee emp2 = new Employee(102, "Bob", 
                        Optional.empty(), 
                        Optional.of("Finance"));
        emp2.printDetails();

        System.out.println("-----------");

        // Case 3: Missing department – should throw exception
        Employee emp3 = new Employee(103, "Charlie", 
                        Optional.of("charlie@example.com"), 
                        Optional.empty());
        try {
            emp3.printDetails();
        } catch (MissingFieldException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}

