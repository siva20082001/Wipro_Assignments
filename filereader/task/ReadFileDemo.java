package com.filereader.task;

import java.io.*;

public class ReadFileDemo {
    public static void main(String[] args) {
        String fileName = "sample.txt"; // File name

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            System.out.println("File Contents:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            System.out.println("The file was not found: " + fileName);
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("An I/O error occurred while reading the file.");
            e.printStackTrace();
        }
    }
}

