package com.springlabs.labexercises.ex02_properties_file;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ex02")
public class ValueBasedController {

    @Value("${app.name}")
    private String name;

    @Value("${app.message}")
    private String message;

    @GetMapping("/show")
    public String showProps() {
        return "Welcome: " + name + "<br>Message: " + message;
    }
}
