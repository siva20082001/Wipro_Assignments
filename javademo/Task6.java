package com.javademo;

import java.util.Scanner;

public class Task6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input marks
        System.out.print("Enter your marks: ");
        int marks = scanner.nextInt();

        // Check grade
        if (marks < 25) {
            System.out.println("Grade: F");
        } else if (marks >= 25 && marks < 45) {
            System.out.println("Grade: E");
        } else if (marks >= 45 && marks < 50) {
            System.out.println("Grade: D");
        } else if (marks >= 50 && marks < 60) {
            System.out.println("Grade: C");
        } else if (marks >= 60 && marks <= 80) {
            System.out.println("Grade: B");
        } else if (marks > 80) {
            System.out.println("Grade: A");
        } else {
            System.out.println("Invalid marks entered.");
        }

        scanner.close();
    }
}

