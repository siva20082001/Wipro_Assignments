package com.springlabs.labexercises.ex08_requestbody;

public class Student {

    private String name;
    private int age;

    // Getters & setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}


//POST http://localhost:8080/ex08/register

//Content-Type: application/json

//{
//"name": "Siva",
//"age": 22
//}