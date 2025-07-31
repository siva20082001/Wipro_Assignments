package com.repositorydemo;

import java.util.List;

public class Task46 {
    public static void main(String[] args) {
        Repository<Employee, Integer> repo = new Repository<>();

        // Add employees
        repo.save(1, new Employee(1, "Alice", 50000));
        repo.save(2, new Employee(2, "Bob", 60000));
        repo.save(3, new Employee(3, "Charlie", 55000));

        // Retrieve all employees
        System.out.println("All Employees:");
        List<Employee> allEmployees = repo.findAll();
        allEmployees.forEach(System.out::println);

        // Retrieve specific employee
        System.out.println("\nEmployee with ID 2:");
        System.out.println(repo.findById(2));

        // Delete an employee
        repo.deleteById(1);
        System.out.println("\nAfter deleting employee with ID 1:");
        repo.findAll().forEach(System.out::println);
    }
}

