package com.javademo;

public class Task27 {

    // Define the enum for currency types
    enum Currency {
        ONE, FIVE, TEN, TWENTY, FIFTY, HUNDRED
    }

    public static void main(String[] args) {
        // Loop through all enum values
        for (Currency currency : Currency.values()) {
            System.out.println("Currency: " + currency);

            // Switch statement to describe each currency
            switch (currency) {
                case ONE:
                    System.out.println("Description: Smallest denomination, often used for change.");
                    break;
                case FIVE:
                    System.out.println("Description: Commonly used for small purchases.");
                    break;
                case TEN:
                    System.out.println("Description: Useful for moderate expenses.");
                    break;
                case TWENTY:
                    System.out.println("Description: Widely used for general purchases.");
                    break;
                case FIFTY:
                    System.out.println("Description: High-value note for large purchases.");
                    break;
                case HUNDRED:
                    System.out.println("Description: Largest denomination, used for major transactions.");
                    break;
            }

            System.out.println(); // For better spacing
        }
    }
}

