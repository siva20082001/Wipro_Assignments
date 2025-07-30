package com.javademo;

import java.util.Scanner;

public class Task4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking inputs from user
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your roll number: ");
        String rollNumber = scanner.nextLine();

        System.out.print("Enter your field of interest: ");
        String interest = scanner.nextLine();

        // Displaying output
        System.out.println("Hey, my name is " + name + " and my roll number is " + rollNumber + ". My field of interest are " + interest + ".");

        scanner.close();
    }
}
