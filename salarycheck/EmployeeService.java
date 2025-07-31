package com.salarycheck;

public class EmployeeService {

    public void validateSalary(double salary) throws InvalidSalaryException {
        if (salary < 0) {
            throw new InvalidSalaryException("Invalid Salary: Salary cannot be negative.");
        }
    }

    public void processSalary(Employee emp) throws InvalidSalaryException {
        validateSalary(emp.getSalary());
        System.out.println("Processing salary for " + emp.getName());
    }

    public void startProcess(Employee emp) throws InvalidSalaryException {
        processSalary(emp);
    }
}

