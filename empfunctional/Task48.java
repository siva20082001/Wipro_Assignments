package com.empfunctional;

import java.util.*;

public class Task48 {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee(1, "Ravi", 50000),
            new Employee(2, "Priya", 60000),
            new Employee(3, "Arun", 45000)
        );

        // Lambda to print name and salary
        EmployeeProcessor printDetails = e -> 
            System.out.println("Name: " + e.getName() + ", Salary: " + e.getSalary());

        // Lambda to calculate and print 10% bonus
        EmployeeProcessor printBonus = e -> 
            System.out.println("Bonus (10%): " + (e.getSalary() * 0.10));

        for (Employee e : employees) {
            printDetails.process(e);
            printBonus.process(e);
            System.out.println("-----");
        }
    }
}
