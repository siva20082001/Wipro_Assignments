package com.javademo;

import java.util.Scanner;

public class Task25 {

    // Check if the triangle is valid
    public static boolean isValid(double a, double b, double c) {
        return (a + b > c) && (a + c > b) && (b + c > a);
    }

    // Calculate area using Heron's formula
    public static double area(double a, double b, double c) {
        double s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    // Calculate perimeter
    public static double perimeter(double a, double b, double c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Enter side a (enter -1 to exit): ");
            double a = scanner.nextDouble();
            if (a == -1) {
                System.out.println("Bye~");
                break;
            }

            System.out.print("Enter side b: ");
            double b = scanner.nextDouble();

            System.out.print("Enter side c: ");
            double c = scanner.nextDouble();

            if (isValid(a, b, c)) {
                double triArea = area(a, b, c);
                double triPerimeter = perimeter(a, b, c);
                System.out.printf("Area: %.2f\n", triArea);
                System.out.printf("Perimeter: %.2f\n", triPerimeter);
            } else {
                System.out.println("The input is invalid.");
            }

            System.out.println(); // extra space
        }

        scanner.close();
    }
}
