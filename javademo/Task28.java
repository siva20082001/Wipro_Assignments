package com.javademo;

interface PerformOperation {
    boolean check(int num);
}

public class Task28 {

    // Lambda to check if number is odd
    public static PerformOperation isOdd() {
        return num -> num % 2 != 0;
    }

    // Lambda to check if number is prime
    public static PerformOperation isPrime() {
        return num -> {
            if (num <= 1) return false;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) return false;
            }
            return true;
        };
    }

    // Lambda to check if number is palindrome
    public static PerformOperation isPalindrome() {
        return num -> {
            String original = String.valueOf(num);
            String reversed = new StringBuilder(original).reverse().toString();
            return original.equals(reversed);
        };
    }

    public static void main(String[] args) {
        PerformOperation oddOp = isOdd();
        PerformOperation primeOp = isPrime();
        PerformOperation palindromeOp = isPalindrome();

        int[] testNumbers = {5, 10, 11, 121, 131, 18};

        for (int num : testNumbers) {
            System.out.println("Number: " + num);
            System.out.println("Is Odd: " + oddOp.check(num));
            System.out.println("Is Prime: " + primeOp.check(num));
            System.out.println("Is Palindrome: " + palindromeOp.check(num));
            System.out.println("-----------------------");
        }
    }
}

