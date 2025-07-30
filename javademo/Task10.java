package com.javademo;

public class Task10 {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Please provide the number of eggs as a command-line argument.");
            return;
        }

        // Parse input from command line
        int eggs = Integer.parseInt(args[0]);

        // Calculations
        int gross = eggs / 144;
        int remainingAfterGross = eggs % 144;

        int dozen = remainingAfterGross / 12;
        int leftover = remainingAfterGross % 12;

        // Output result
        System.out.println("Your number of eggs is " + gross + " gross, " + dozen + " dozen, and " + leftover);
    }
}

