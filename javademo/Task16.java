package com.javademo;

import java.util.Scanner;

public class Task16 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] marks = new int[3];
        int count = 0;

        while (count < 3) {
            System.out.print("Enter the mark (0-100) for student " + (count + 1) + ": ");
            if (scanner.hasNextInt()) {
                int mark = scanner.nextInt();
                if (mark >= 0 && mark <= 100) {
                    marks[count] = mark;
                    count++;
                } else {
                    System.out.println("Invalid input, try again...");
                }
            } else {
                System.out.println("Invalid input, try again...");
                scanner.next(); // Clear invalid input
            }
        }

        // Calculate average
        double average = (marks[0] + marks[1] + marks[2]) / 3.0;

        // Print rounded average
        System.out.printf("The average is: %.2f\n", average);
        
        scanner.close();
    }
}
