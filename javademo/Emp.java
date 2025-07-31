package com.javademo;

public class Emp {
    private int empId;
    private String empName;
    private String designation;
    private double basic;
    private double hra;

    public Emp(int empId, String empName, String designation, double basic) throws LowSalException {
        if (basic < 50000) {
            throw new LowSalException("Basic salary must be at least 50000.");
        }
        this.empId = empId;
        this.empName = empName;
        this.designation = designation;
        this.basic = basic;
    }

    public void calculateHRA() {
        switch (designation) {
            case "Manager":
                hra = 0.10 * basic;
                break;
            case "TeamLeader":
                hra = 0.12 * basic;
                break;
            case "HR":
                hra = 0.05 * basic;
                break;
            default:
                hra = 0.0;
        }
    }

    public void printDET() {
        System.out.println("\n--- Employee Details ---");
        System.out.println("Emp ID: " + empId);
        System.out.println("Name: " + empName);
        System.out.println("Designation: " + designation);
        System.out.println("Basic Salary: " + basic);
        System.out.println("HRA: " + hra);
    }
}

