package com.springlabs.labexercises.ex02_properties_file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConfigPropsController {

    @Autowired
    private UserInfoProperties userInfo;

    @GetMapping("/ex02/userinfo")
    public String showUserInfo() {
        return "Name: " + userInfo.getName() +
               "<br>Email: " + userInfo.getEmail() +
               "<br>Course: " + userInfo.getCourse();
    }
}

//http://localhost:8080/ex02/show

//http://localhost:8080/ex02/userinfo