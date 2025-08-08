package com.springlabs.labexercises.ex18_grocery_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroceryItemService {

    @Autowired
    private GroceryItemRepository repo;

    public List<GroceryItem> findAll() {
        return repo.findAll();
    }

    public GroceryItem save(GroceryItem item) {
        return repo.save(item);
    }

    public void deleteById(int id) {
        repo.deleteById(id);
    }

    public Optional<GroceryItem> findById(int id) {
        return repo.findById(id);
    }
}
