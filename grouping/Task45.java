package com.grouping;

import java.util.*;
import java.util.stream.Collectors;

public class Task45 {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student(1, "Alice", "CSE"),
            new Student(2, "Bob", "ECE"),
            new Student(3, "Charlie", "CSE"),
            new Student(4, "David", "EEE"),
            new Student(5, "Eva", "ECE"),
            new Student(6, "Frank", "CSE")
        );

        // ✅ Grouping by department using Streams
        Map<String, List<Student>> groupedByDept = students.stream()
                .collect(Collectors.groupingBy(Student::getDepartment));

        // ✅ Display output
        for (Map.Entry<String, List<Student>> entry : groupedByDept.entrySet()) {
            System.out.println("Department: " + entry.getKey());
            System.out.println("Students: " + entry.getValue());
            System.out.println();
        }
    }
}
