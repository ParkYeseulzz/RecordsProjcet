package com.web.project.record.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.web.project.record.service.testService;

@RestController
@RequestMapping("/api/users")
public class TestController {

    private final testService testService;

    @Autowired
    public TestController(testService testService) {
        this.testService = testService;
    }

    @PostMapping
    public String createUser(@RequestParam String name, @RequestParam int age) {
        testService.createUser(name, age);
        return "User added successfully!";
    }
}
