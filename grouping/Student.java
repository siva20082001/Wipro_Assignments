package com.grouping;

public class Student {
    private int id;
    private String name;
    private String department;

    // ✅ Constructor with 3 parameters
    public Student(int id, String name, String department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    // ✅ Getters
    public String getDepartment() {
        return department;
    }

    public String getName() {
        return name;
    }

    // ✅ For display
    @Override
    public String toString() {
        return name;
    }
}

