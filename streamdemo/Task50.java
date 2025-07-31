package com.streamdemo;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

class Employee {
    private int id;
    private String name;
    private String department;
    private double salary;

    public Employee(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }

    @Override
    public String toString() {
        return name + "(" + department + ", Rs." + salary + ")";
    }
}

public class Task50 {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee(101, "Ravi", "HR", 50000),
                new Employee(102, "Priya", "IT", 60000),
                new Employee(103, "Arun", "HR", 55000),
                new Employee(104, "Kavya", "IT", 70000),
                new Employee(105, "Divya", "Sales", 45000)
        );

        // Q1
        employees.stream().map(Employee::getName).forEach(System.out::println);

        // Q2
        employees.stream().filter(e -> e.getSalary() > 55000).forEach(System.out::println);

        // Q3
        long count = employees.stream().filter(e -> e.getDepartment().equals("HR")).count();
        System.out.println("HR count: " + count);

        // Q4
        employees.stream().sorted(Comparator.comparingDouble(Employee::getSalary).reversed()).forEach(System.out::println);

        // Q5
        employees.stream().max(Comparator.comparingDouble(Employee::getSalary)).ifPresent(System.out::println);

        // Q6
        double avg = employees.stream().mapToDouble(Employee::getSalary).average().orElse(0);
        System.out.println("Average salary: " + avg);

        // Q7
        List<String> names = employees.stream().map(Employee::getName).collect(Collectors.toList());
        System.out.println(names);

        // Q8
        Map<String, List<Employee>> byDept = employees.stream().collect(Collectors.groupingBy(Employee::getDepartment));
        System.out.println(byDept);

        // Q9
        Map<String, Double> totalSal = employees.stream().collect(Collectors.groupingBy(Employee::getDepartment, Collectors.summingDouble(Employee::getSalary)));
        System.out.println(totalSal);

        // Q10
        employees.stream().filter(e -> e.getDepartment().equals("IT"))
                .sorted(Comparator.comparingDouble(Employee::getSalary))
                .map(Employee::getName).forEach(System.out::println);

        // Q11
        boolean anyLessThan40k = employees.stream().anyMatch(e -> e.getSalary() < 40000);
        System.out.println("Any < 40k: " + anyLessThan40k);

        // Q12
        String csvNames = employees.stream().map(Employee::getName).collect(Collectors.joining(", "));
        System.out.println(csvNames);

        // Q13
        employees.stream().sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
                .limit(2).forEach(System.out::println);

        // Q14
        employees.stream().skip(2).forEach(System.out::println);

        // Q15
        employees.stream().limit(3).map(Employee::getName).forEach(System.out::println);

        // Q16
        employees.stream().filter(e -> e.getDepartment().equals("HR"))
                .min(Comparator.comparingDouble(Employee::getSalary)).ifPresent(System.out::println);

        // Q17
        Map<Boolean, List<Employee>> partition = employees.stream().collect(Collectors.partitioningBy(e -> e.getSalary() > 55000));
        System.out.println(partition);

        // Q18
        Map<String, Double> avgSalaryByDept = employees.stream().collect(Collectors.groupingBy(Employee::getDepartment, Collectors.averagingDouble(Employee::getSalary)));
        System.out.println(avgSalaryByDept);

        // Q19
        employees.stream().sorted(Comparator.comparing(Employee::getName).thenComparing(Employee::getSalary)).forEach(System.out::println);

        // Q20
        Map<Integer, String> idNameMap = employees.stream().collect(Collectors.toMap(Employee::getId, Employee::getName));
        System.out.println(idNameMap);

        // Challenge 1
        employees.stream().filter(e -> e.getName().startsWith("D") && e.getName().endsWith("a")).forEach(System.out::println);

        // Challenge 2
        byDept.entrySet().stream().filter(entry -> entry.getValue().size() > 1).forEach(System.out::println);

        // Challenge 3
        employees.stream().map(Employee::getSalary).distinct().sorted(Comparator.reverseOrder()).skip(1).findFirst().ifPresent(System.out::println);
    }
}

