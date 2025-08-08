package com.springlabs.labexercises.ex18_grocery_app;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/ex18/groceries")
public class GroceryItemController {

    @Autowired
    private GroceryItemService service;

    @GetMapping
    public String listItems(Model model) {
        model.addAttribute("items", service.findAll());
        return "grocery-list";
    }

    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("item", new GroceryItem());
        return "form";
    }

    @PostMapping("/save")
    public String saveItem(@Valid @ModelAttribute("item") GroceryItem item, BindingResult result) {
        if (result.hasErrors()) {
            return "form";
        }
        service.save(item);
        return "redirect:/ex18/groceries";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable int id, Model model) {
        GroceryItem item = service.findById(id).orElseThrow();
        model.addAttribute("item", item);
        return "form";
    }

    @GetMapping("/delete/{id}")
    public String deleteItem(@PathVariable int id) {
        service.deleteById(id);
        return "redirect:/ex18/groceries";
    }
}
