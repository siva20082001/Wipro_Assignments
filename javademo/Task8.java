package com.javademo;

import java.util.Scanner;

public class Task8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input number of classes
        System.out.print("Enter number of classes held: ");
        int totalClasses = scanner.nextInt();

        System.out.print("Enter number of classes attended: ");
        int attendedClasses = scanner.nextInt();

        // Calculate attendance percentage
        double attendancePercentage = ((double) attendedClasses / totalClasses) * 100;

        // Ask for medical cause
        System.out.print("Do you have a medical cause? (Y/N): ");
        char medicalCause = scanner.next().charAt(0);

        // Print attendance percentage
        System.out.printf("Attendance percentage: %.2f%%\n", attendancePercentage);

        // Check exam eligibility
        if (attendancePercentage >= 70 || medicalCause == 'Y' || medicalCause == 'y') {
            System.out.println("The student is allowed to sit in the exam.");
        } else {
            System.out.println("The student is NOT allowed to sit in the exam.");
        }

        scanner.close();
    }
}

