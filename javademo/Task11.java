package com.javademo;

public class Task11 {

    // Method for addition
    public void add(double a, double b) {
        double result = a + b;
        System.out.println("Addition: " + result);
    }

    // Method for subtraction
    public void diff(double a, double b) {
        double result = a - b;
        System.out.println("Difference: " + result);
    }

    // Method for multiplication
    public void mul(double a, double b) {
        double result = a * b;
        System.out.println("Multiplication: " + result);
    }

    // Method for division
    public void div(double a, double b) {
        if (b != 0) {
            double result = a / b;
            System.out.println("Division: " + result);
        } else {
            System.out.println("Error: Division by zero is not allowed.");
        }
    }

    // Main method
    public static void main(String[] args) {
        Task11 calc = new Task11();  // Creating object

        double num1 = 15;
        double num2 = 3;

        // Invoke methods
        calc.add(num1, num2);
        calc.diff(num1, num2);
        calc.mul(num1, num2);
        calc.div(num1, num2);
    }
}
