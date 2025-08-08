package com.springlabs.labexercises.ex05_redirect;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RedirectController {

    // User visits: http://localhost:8080/ex05/home
    // Automatically redirected to: /ex05/welcome
    @GetMapping("/ex05/home")
    public String home() {
        return "redirect:/ex05/welcome";
    }

    // Final page after redirection
    @GetMapping("/ex05/welcome")
    public String welcome() {
        return "welcome"; // This will show welcome.html from templates folder
    }
}

//http://localhost:8080/ex05/home

//http://localhost:8080/ex05/welcome