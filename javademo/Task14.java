package com.javademo;

class Shape {

    // Area methods
    public double area(double side) {
        // Square
        return side * side;
    }

    public double area(double length, double breadth) {
        // Rectangle
        return length * breadth;
    }

    // Perimeter methods
    public double perimeter(double side) {
        // Square
        return 4 * side;
    }

    public double perimeter(double length, double breadth) {
        // Rectangle
        return 2 * (length + breadth);
    }
}

// Main class
public class Task14 {
    public static void main(String[] args) {
        Shape shape = new Shape();

        // Square
        double squareSide = 5;
        System.out.println("Square:");
        System.out.println("Area: " + shape.area(squareSide));
        System.out.println("Perimeter: " + shape.perimeter(squareSide));

        // Rectangle
        double length = 10, breadth = 4;
        System.out.println("\nRectangle:");
        System.out.println("Area: " + shape.area(length, breadth));
        System.out.println("Perimeter: " + shape.perimeter(length, breadth));
    }
}

