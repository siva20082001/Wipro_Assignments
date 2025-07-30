package com.javademo;

import java.io.*;
import java.util.*;

public class Task37 {
    public static void main(String[] args) {
        String fileName = "batchmates.txt";

        // Sample names list (You can change these)
        List<String> names = Arrays.asList(
            "Siva Reddy",
            "Karthik",
            "Anjali",
            "Nithin",
            "Praveen",
            "Divya"
        );

        // Writing to file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            for (String name : names) {
                writer.write(name);
                writer.newLine();
            }
            System.out.println("Batchmates' names written to " + fileName);
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }

        // Reading from file
        System.out.println("\nReading from file:");
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("- " + line);
            }
        } catch (IOException e) {
            System.out.println("Error reading from file: " + e.getMessage());
        }
    }
}
