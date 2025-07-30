package com.javademo;

import java.util.Scanner;

public class Task7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input
        System.out.print("Enter number of classes held: ");
        int totalClasses = scanner.nextInt();

        System.out.print("Enter number of classes attended: ");
        int attendedClasses = scanner.nextInt();

        // Calculate attendance percentage
        double attendancePercentage = ((double) attendedClasses / totalClasses) * 100;

        // Display percentage
        System.out.printf("Attendance percentage: %.2f%%\n", attendancePercentage);

        // Check eligibility
        if (attendancePercentage >= 70) {
            System.out.println("The student is allowed to sit in the exam.");
        } else {
            System.out.println("The student is NOT allowed to sit in the exam.");
        }

        scanner.close();
    }
}

