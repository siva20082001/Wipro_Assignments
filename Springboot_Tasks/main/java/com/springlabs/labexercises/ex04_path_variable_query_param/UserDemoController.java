package com.springlabs.labexercises.ex04_path_variable_query_param;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ex04")
public class UserDemoController {

    // Example: http://localhost:8080/ex04/user/101
    @GetMapping("/user/{id}")
    public String getUserById(@PathVariable int id) {
        return "User ID from path: " + id;
    }

    // Example: http://localhost:8080/ex04/user?id=101
    @GetMapping("/user")
    public String getUserByQueryParam(@RequestParam int id) {
        return "User ID from query param: " + id;
    }

    // Example: http://localhost:8080/ex04/user/101/details?name=Siva
    @GetMapping("/user/{id}/details")
    public String getUserFullDetails(@PathVariable int id, @RequestParam String name) {
        return "User ID: " + id + "<br>Name: " + name;
    }
}
