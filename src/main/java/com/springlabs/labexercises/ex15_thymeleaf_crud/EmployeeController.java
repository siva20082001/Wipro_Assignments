package com.springlabs.labexercises.ex15_thymeleaf_crud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/ex15/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepo;

    // List all
    @GetMapping
    public String listEmployees(Model model) {
        model.addAttribute("employees", employeeRepo.findAll());
        return "employee-list";
    }

    // Show create form
    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("employee", new Employee());
        return "employee-form";
    }

    // Save employee
    @PostMapping("/save")
    public String saveEmployee(@ModelAttribute Employee employee) {
        employeeRepo.save(employee);
        return "redirect:/ex15/employees";
    }

    // Edit
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        model.addAttribute("employee", employeeRepo.findById(id).orElse(null));
        return "employee-form";
    }

    // Delete
    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        employeeRepo.deleteById(id);
        return "redirect:/ex15/employees";
    }
}
