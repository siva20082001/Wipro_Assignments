package com.springlabs.labexercises.ex13_crud_postman;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private int age;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}



//1. Create User
//POST → http://localhost:8080/ex13/users
//
//Body (JSON):
//
//json
//{
// "name": "Siva",
// "email": "siva@example.com",
// "age": 25
//}

//2. Get All Users
//GET → http://localhost:8080/ex13/users

//3. Get Single User
//GET → http://localhost:8080/ex13/users/1


//4. Update User
//PUT → http://localhost:8080/ex13/users/1
//
//Body (JSON):
//
//json
//{
//  "name": "Siva Reddy",
//  "email": "siva.r@example.com",
//  "age": 26
//}

//5. Delete User
//DELETE → http://localhost:8080/ex13/users/1