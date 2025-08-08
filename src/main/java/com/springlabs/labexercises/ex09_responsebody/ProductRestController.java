package com.springlabs.labexercises.ex09_responsebody;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductRestController {

    @GetMapping("/ex09/product")
    public Product getProduct() {
        return new Product(101, "Laptop", 59999.0);
    }
}
