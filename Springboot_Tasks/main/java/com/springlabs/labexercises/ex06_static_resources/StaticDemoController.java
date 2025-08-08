package com.springlabs.labexercises.ex06_static_resources;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StaticDemoController {

    @GetMapping("/ex06/page")
    public String showPage() {
        return "static-page"; // returns static-page.html
    }
}


//http://localhost:8080/ex06/page