package com.javademo;

import java.util.*;

// Employee class with id, name, and salary
class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Getters
    public int getId() { return id; }
    public String getName() { return name; }
    public double getSalary() { return salary; }

    // toString method for printing
    @Override
    public String toString() {
        return "Employee{id=" + id + ", name='" + name + "', salary=" + salary + "}";
    }
}

// Comparator class for sorting by salary in descending order
class SalaryDescendingComparator implements Comparator<Employee> {
    public int compare(Employee e1, Employee e2) {
        return Double.compare(e2.getSalary(), e1.getSalary());  // Descending
    }
}

public class Task44 {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();

        // Adding employee data
        employees.add(new Employee(101, "Ravi", 50000));
        employees.add(new Employee(102, "Priya", 60000));
        employees.add(new Employee(103, "Arun", 55000));
        employees.add(new Employee(104, "Kavya", 70000));
        employees.add(new Employee(105, "Divya", 45000));

        System.out.println("Original List:");
        employees.forEach(System.out::println);

        // Sort by salary descending using comparator
        employees.sort(new SalaryDescendingComparator());
        System.out.println("\nSorted by Salary (Descending):");
        employees.forEach(System.out::println);

        // Sort by name alphabetically using lambda
        employees.sort((e1, e2) -> e1.getName().compareToIgnoreCase(e2.getName()));
        System.out.println("\nSorted by Name (Alphabetically):");
        employees.forEach(System.out::println);
    }
}
