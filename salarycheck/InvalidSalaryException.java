package com.salarycheck;

// Custom Checked Exception
public class InvalidSalaryException extends Exception {
    public InvalidSalaryException(String message) {
        super(message);
    }
}

