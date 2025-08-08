package com.springlabs.labexercises.ex01_autowire_qualifier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ex01")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @GetMapping("/speak")
    public String speak() {
        animalService.makeAnimalSpeak();
        return "Animal spoke! Check console.";
    }
}
