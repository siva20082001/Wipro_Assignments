package com.springlabs.labexercises.ex07_form_validation_messages;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class User {

    @NotBlank(message = "{user.name.required}")
    private String name;

    @Min(value = 18, message = "{user.age.min}")
    private int age;

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

//http://localhost:8080/ex07/register