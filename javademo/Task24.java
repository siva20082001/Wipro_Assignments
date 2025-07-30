package com.javademo;

import java.util.Scanner;

public class Task24 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double[] speeds = new double[5];
        double sum = 0;

        // Taking input
        for (int i = 0; i < 5; i++) {
            System.out.print("Enter speed of biker " + (i + 1) + ": ");
            speeds[i] = scanner.nextDouble();
            sum += speeds[i];
        }

        double average = sum / 5;
        System.out.println("\nAverage speed = " + average);
        System.out.println("Bikers who qualified (speed > average):");

        // Print qualifying speeds
        for (int i = 0; i < 5; i++) {
            if (speeds[i] > average) {
                System.out.println("Biker " + (i + 1) + " with speed: " + speeds[i]);
            }
        }

        scanner.close();
    }
}
