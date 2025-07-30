package com.javademo;

public class Task34 {

    // Inner Employee class
    static class Employee {
        private String empId;
        private String name;
        private int yearOfBirth;

        public Employee(String empId, String name, int yearOfBirth) {
            this.empId = empId;
            this.name = name;
            this.yearOfBirth = yearOfBirth;
        }

        public void displayDetails() {
            System.out.println("Name: " + name);
            System.out.println("Year of Birth: " + yearOfBirth);
            System.out.println("Employee ID: " + empId);

            String[] parts = empId.split("-");
            if (parts.length == 3) {
                String year = parts[0];
                String designationCode = parts[1];
                String number = parts[2];

                String designation = switch (designationCode) {
                    case "F" -> "Faculty";
                    case "S" -> "Staff";
                    default -> "Unknown";
                };

                System.out.println("Year Joined: 19" + year);
                System.out.println("Designation: " + designation);
                System.out.println("Employee Number: " + number);
            } else {
                System.out.println("Invalid Employee ID format.");
            }
        }
    }

    // main method
    public static void main(String[] args) {
        Employee emp1 = new Employee("81-F-112", "Ravi", 1960);
        Employee emp2 = new Employee("79-S-254", "Priya", 1955);

        System.out.println("--- Employee 1 Details ---");
        emp1.displayDetails();

        System.out.println("\n--- Employee 2 Details ---");
        emp2.displayDetails();
    }
}
