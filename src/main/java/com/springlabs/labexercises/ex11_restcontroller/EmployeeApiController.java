package com.springlabs.labexercises.ex11_restcontroller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/ex11")
public class EmployeeApiController {

    @GetMapping("/employee")
    public Employee getEmployee() {
        return new Employee(1, "Siva", 45000.0);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return Arrays.asList(
                new Employee(1, "Siva", 45000.0),
                new Employee(2, "Anu", 52000.0),
                new Employee(3, "Ravi", 47000.0)
        );
    }
}
