package com.javademo;

import java.util.Scanner;

public class Task9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double totalRetailValue = 0.0;
        char choice;

        do {
            System.out.print("Enter product number (1-3): ");
            int productNumber = scanner.nextInt();

            System.out.print("Enter quantity sold: ");
            int quantity = scanner.nextInt();

            switch (productNumber) {
                case 1:
                    totalRetailValue += quantity * 22.50;
                    break;
                case 2:
                    totalRetailValue += quantity * 44.50;
                    break;
                case 3:
                    totalRetailValue += quantity * 9.98;
                    break;
                default:
                    System.out.println("Invalid product number.");
            }

            System.out.print("Do you want to enter more sales? (Y/N): ");
            choice = scanner.next().charAt(0);

        } while (choice == 'Y' || choice == 'y');

        System.out.printf("Total retail value of all products sold: ₹%.2f\n", totalRetailValue);

        scanner.close();
    }
}

