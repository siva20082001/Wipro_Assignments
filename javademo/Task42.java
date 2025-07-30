package com.javademo;

public class Task42 {

    // Method that throws an exception
    public static void someMethod2() throws Exception {
        throw new Exception("Exception thrown from someMethod2()");
    }

    // Method that catches and rethrows
    public static void someMethod() throws Exception {
        try {
            someMethod2();
        } catch (Exception e) {
            System.out.println("Caught in someMethod(), rethrowing now...");
            throw e;  // Rethrow the exception
        }
    }

    // Main method
    public static void main(String[] args) {
        try {
            someMethod();
        } catch (Exception e) {
            System.out.println("Caught in main()");
            e.printStackTrace();  // Print stack trace
        }
    }
}