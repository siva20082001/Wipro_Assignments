package com.javademo;

import java.util.Scanner;

//Step 1: Functional Interface
@FunctionalInterface
interface MinimumFinder {
 float minimum3(float a, float b, float c);
}

public class Task30 {

 public static void main(String[] args) {
     Scanner scanner = new Scanner(System.in);

     // Step 4: Read input
     System.out.print("Enter first number: ");
     float num1 = scanner.nextFloat();
     System.out.print("Enter second number: ");
     float num2 = scanner.nextFloat();
     System.out.print("Enter third number: ");
     float num3 = scanner.nextFloat();

     // Step 2 & 3: Method reference to Math.min via lambda
     MinimumFinder minFinder = (a, b, c) -> Math.min(Math.min(a, b), c);

     // Step 5: Use the interface
     float result = minFinder.minimum3(num1, num2, num3);
     System.out.println("The smallest value is: " + result);

     scanner.close();
 }
}

