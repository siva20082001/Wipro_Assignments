package com.javademo;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Task31 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Demonstrate InputMismatchException
        try {
            System.out.print("Enter an integer: ");
            int number = scanner.nextInt();  // InputMismatchException may occur here
            System.out.println("You entered: " + number);
        } catch (InputMismatchException e) {
            System.out.println("InputMismatchException: Please enter a valid integer.");
        }

        scanner.nextLine(); // clear buffer

        // Demonstrate StringIndexOutOfBoundsException
        try {
            System.out.print("Enter a string: ");
            String input = scanner.nextLine();
            System.out.print("Enter index to access: ");
            int index = scanner.nextInt();
            char ch = input.charAt(index);  // StringIndexOutOfBoundsException may occur
            System.out.println("Character at index " + index + ": " + ch);
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("StringIndexOutOfBoundsException: Index out of range.");
        }

        scanner.close();
    }
}

