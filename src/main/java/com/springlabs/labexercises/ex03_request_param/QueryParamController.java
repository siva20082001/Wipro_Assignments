package com.springlabs.labexercises.ex03_request_param;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QueryParamController {

    // Example: http://localhost:8080/ex03/greet?name=Siva
    @GetMapping("/ex03/greet")
    public String greetUser(@RequestParam String name) {
        return "Hello, " + name + "! Welcome to Spring Boot.";
    }

    // Example: http://localhost:8080/ex03/details?name=Siva&age=22
    @GetMapping("/ex03/details")
    public String userDetails(@RequestParam String name, @RequestParam int age) {
        return "👤 Name: " + name + "<br>🎂 Age: " + age;
    }

    // Example: http://localhost:8080/ex03/default
    @GetMapping("/ex03/default")
    public String defaultValues(
            @RequestParam(defaultValue = "Guest") String name,
            @RequestParam(defaultValue = "0") int age) {
        return "Hello, " + name + "! Your age is " + age + ".";
    }
}


//http://localhost:8080/ex03/default?name=Anu&age=30