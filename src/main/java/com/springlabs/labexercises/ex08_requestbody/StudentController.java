package com.springlabs.labexercises.ex08_requestbody;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ex08")
public class StudentController {

    // Accept JSON and bind it to Student object
    @PostMapping("/register")
    public String registerStudent(@RequestBody Student student) {
        return "✅ Student Registered: " +
               student.getName() + " (Age: " + student.getAge() + ")";
    }
}
