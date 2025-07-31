package com.salarycheck;

public class Task47 {
    public static void main(String[] args) {
        Employee emp = new Employee(101, "Ravi", -5000.0);  // Negative salary

        EmployeeService service = new EmployeeService();

        try {
            service.startProcess(emp);
        } catch (InvalidSalaryException e) {
            System.out.println("Exception caught in main: " + e.getMessage());
            e.printStackTrace();
        }
    }
}

