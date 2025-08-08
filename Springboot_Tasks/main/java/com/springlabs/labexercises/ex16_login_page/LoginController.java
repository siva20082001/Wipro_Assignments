package com.springlabs.labexercises.ex16_login_page;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/ex16")
public class LoginController {

    // Show login form
    @GetMapping("/login")
    public String showLoginForm(Model model) {
        model.addAttribute("loginForm", new LoginForm());
        return "login";
    }

    // Handle login submission
    @PostMapping("/login")
    public String processLogin(@ModelAttribute LoginForm loginForm, Model model) {
        String username = loginForm.getUsername();
        String password = loginForm.getPassword();

        // Simple check (replace with DB check later)
        if ("admin".equals(username) && "password123".equals(password)) {
            model.addAttribute("username", username);
            return "success";
        } else {
            model.addAttribute("error", "Invalid username or password");
            return "login";
        }
    }
}


//http://localhost:8080/ex16/login