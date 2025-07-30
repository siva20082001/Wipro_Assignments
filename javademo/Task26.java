package com.javademo;

import java.util.*;

public class Task26 {

    public static void main(String[] args) {
        // Given input array
        int[] input = {2, 3, 54, 1, 6, 7, 7};

        // Use LinkedHashSet to remove duplicates and preserve order
        Set<Integer> uniqueSet = new LinkedHashSet<>();
        for (int num : input) {
            uniqueSet.add(num);
        }

        int sumEven = 0;
        for (int num : uniqueSet) {
            if (num % 2 == 0) {
                sumEven += num;
            }
        }

        System.out.println("Unique elements: " + uniqueSet);
        System.out.println("Sum of even numbers: " + sumEven);
    }
}

