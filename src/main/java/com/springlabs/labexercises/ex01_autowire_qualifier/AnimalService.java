package com.springlabs.labexercises.ex01_autowire_qualifier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class AnimalService {

    @Autowired
    @Qualifier("dog") // or "cat"
    private Animal animal;

    public void makeAnimalSpeak() {
        animal.speak();
    }
}
