package com.javademo;

public class Task3 {
    public static void main(String[] args) {
        int totalStudents = 90;
        int totalBoys = 45;

        int totalGradeA = (50 * totalStudents) / 100;  // 50% of total students
        int boysWithGradeA = 20;

        int girlsWithGradeA = totalGradeA - boysWithGradeA;

        System.out.println("Total number of girls getting grade 'A': " + girlsWithGradeA);
    }
}

