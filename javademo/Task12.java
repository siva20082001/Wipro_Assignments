package com.javademo;

import java.util.*;

public class Task12 {
    public static void main(String[] args) {
        Standard std = new Standard();
        std.addStudents(); // Add 8 students
        System.out.println("1. All students sorted by roll number:");
        std.displayStudentsByRollNo();

        System.out.println("\n2. Student with highest percentage:");
        std.displayTopperByPercentage();

        System.out.println("\n3. Student with highest marks in Mathematics:");
        std.displayTopperInMaths();

        System.out.println("\n4. Students sorted by (Math + Science) total:");
        std.displayByMathAndScienceTotal();

        System.out.println("\n5. All students with rank (sorted by descending percentage):");
        std.displayWithRank();
    }
}

// Student class
class Student {
    private static int counter = 1;
    private int rollNo;
    private String studName;
    private int marksInEng, marksInMaths, marksInScience;

    public Student(String name, int eng, int maths, int sci) {
        this.rollNo = counter++;
        this.studName = name;
        this.marksInEng = eng;
        this.marksInMaths = maths;
        this.marksInScience = sci;
    }

    // Getters and setters
    public int getRollNo() {
        return rollNo;
    }

    public String getStudName() {
        return studName;
    }

    public int getMarksInEng() {
        return marksInEng;
    }

    public int getMarksInMaths() {
        return marksInMaths;
    }

    public int getMarksInScience() {
        return marksInScience;
    }

    public int getTotalMarks() {
        return marksInEng + marksInMaths + marksInScience;
    }

    public double getPercentage() {
        return getTotalMarks() / 3.0;
    }

    public int getMathScienceTotal() {
        return marksInMaths + marksInScience;
    }
}

// Standard class
class Standard {
    private List<Student> students = new ArrayList<>();

    // Add 8 students
    public void addStudents() {
        students.add(new Student("Alice", 80, 90, 85));
        students.add(new Student("Bob", 70, 95, 88));
        students.add(new Student("Charlie", 60, 78, 72));
        students.add(new Student("David", 90, 85, 91));
        students.add(new Student("Eve", 88, 92, 90));
        students.add(new Student("Frank", 76, 84, 80));
        students.add(new Student("Grace", 68, 75, 70));
        students.add(new Student("Hannah", 95, 89, 94));
    }

    // 1. Display students by roll number
    public void displayStudentsByRollNo() {
        students.stream()
                .sorted(Comparator.comparingInt(Student::getRollNo))
                .forEach(s -> System.out.println("Roll No: " + s.getRollNo() + ", Name: " + s.getStudName()));
    }

    // 2. Display student with highest percentage
    public void displayTopperByPercentage() {
        Student topper = Collections.max(students, Comparator.comparingDouble(Student::getPercentage));
        System.out.println("Roll No: " + topper.getRollNo() + ", Name: " + topper.getStudName());
    }

    // 3. Display student with highest marks in maths
    public void displayTopperInMaths() {
        Student topper = Collections.max(students, Comparator.comparingInt(Student::getMarksInMaths));
        System.out.println("Roll No: " + topper.getRollNo() + ", Name: " + topper.getStudName());
    }

    // 4. Display students by total marks in maths + science
    public void displayByMathAndScienceTotal() {
        students.stream()
                .sorted(Comparator.comparingInt(Student::getMathScienceTotal))
                .forEach(s -> System.out.println("Roll No: " + s.getRollNo() + ", Name: " + s.getStudName()));
    }

    // 5. Display students with total marks, percentage, and rank (descending by percentage)
    public void displayWithRank() {
        students.sort(Comparator.comparingDouble(Student::getPercentage).reversed());

        int rank = 1;
        for (Student s : students) {
            System.out.printf("Roll No: %d, Name: %s, Total: %d, Percentage: %.2f%%, Rank: %d\n",
                    s.getRollNo(), s.getStudName(), s.getTotalMarks(), s.getPercentage(), rank++);
        }
    }
}
