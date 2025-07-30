package com.javademo;

import java.util.HashMap;
import java.util.Map;

public class Task15 {
    public static void main(String[] args) {
        // Define an array of 10 elements (you can change the values as needed)
        int[] arr = {5, 2, 5, 7, 2, 9, 1, 5, 2, 7};

        // Create a HashMap to store frequency count
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Count the occurrences
        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Display results
        System.out.println("Element -> Frequency");
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}

