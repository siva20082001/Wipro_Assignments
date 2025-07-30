package com.javademo;

import java.util.*;

public class Task29 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            // Read Register Number
            System.out.print("Enter Register Number (9 characters): ");
            String regNo = sc.nextLine();

            // Read Mobile Number
            System.out.print("Enter Mobile Number (10 digits): ");
            String mobileNo = sc.nextLine();

            // Validate Register Number length
            if (regNo.length() != 9) {
                throw new IllegalArgumentException("Register Number must be exactly 9 characters");
            }

            // Validate Register Number content (only alphanumeric)
            if (!regNo.matches("[a-zA-Z0-9]+")) {
                throw new NoSuchElementException("Register Number must contain only alphabets and digits");
            }

            // Validate Mobile Number length
            if (mobileNo.length() != 10) {
                throw new IllegalArgumentException("Mobile Number must be exactly 10 digits");
            }

            // Validate Mobile Number content (only digits)
            if (!mobileNo.matches("\\d+")) {
                throw new NumberFormatException("Mobile Number must contain only digits");
            }

            // If all validations pass
            System.out.println("valid");

        } catch (NumberFormatException e) {
            System.out.println("invalid");
            System.out.println("Error: " + e.getMessage());
        } catch (NoSuchElementException e) {
            System.out.println("invalid");
            System.out.println("Error: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("invalid");
            System.out.println("Error: " + e.getMessage());
        } finally {
            sc.close();
        }
    }
}

