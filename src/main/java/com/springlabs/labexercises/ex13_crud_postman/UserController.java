package com.springlabs.labexercises.ex13_crud_postman;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ex13/users")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    // Create user
    @PostMapping
    public String createUser(@RequestBody User user) {
        userRepo.save(user);
        return "✅ User created!";
    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    // Get single user
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepo.findById(id).orElse(null);
    }

    // Update user
    @PutMapping("/{id}")
    public String updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<User> optionalUser = userRepo.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setName(updatedUser.getName());
            user.setEmail(updatedUser.getEmail());
            user.setAge(updatedUser.getAge());
            userRepo.save(user);
            return "✅ User updated!";
        } else {
            return "❌ User not found!";
        }
    }

    // Delete user
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        userRepo.deleteById(id);
        return "❌ User deleted!";
    }
}
