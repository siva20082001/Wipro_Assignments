package com.springlabs.labexercises.ex01_autowire_qualifier;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("dog")
public class Dog implements Animal {
    @Override
    public void speak() {
        System.out.println("Woof!");
    }
}
