package com.springlabs.labexercises.ex18_grocery_app;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryItemRepository extends JpaRepository<GroceryItem, Integer> {
}
