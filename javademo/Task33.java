package com.javademo;

public class Task33 {
    public static void main(String[] args) {
        try {
            Emp emp1 = new Emp(101, "Alice", "Manager", 60000);
            emp1.calculateHRA();
            emp1.printDET();

            Emp emp2 = new Emp(102, "Bob", "TeamLeader", 55000);
            emp2.calculateHRA();
            emp2.printDET();

            Emp emp3 = new Emp(103, "Charlie", "HR", 48000); // Throws exception
            emp3.calculateHRA();
            emp3.printDET();

        } catch (LowSalException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}

