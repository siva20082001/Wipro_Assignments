package com.springlabs.labexercises.ex18_grocery_app;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

@SpringBootTest
public class GroceryItemServiceTest {

    @MockBean
    private GroceryItemRepository repo;

    @Autowired
    private GroceryItemService service;

    @Test
    void testSaveItem() {
        GroceryItem item = new GroceryItem();
        item.setName("Milk");
        item.setQuantity(2);
        item.setPrice(40);

        Mockito.when(repo.save(item)).thenReturn(item);

        GroceryItem saved = service.save(item);
        Assertions.assertEquals("Milk", saved.getName());
    }

    @Test
    void testFindById() {
        GroceryItem item = new GroceryItem();
        item.setId(1);
        item.setName("Rice");

        Mockito.when(repo.findById(1)).thenReturn(Optional.of(item));

        Optional<GroceryItem> result = service.findById(1);
        Assertions.assertTrue(result.isPresent());
        Assertions.assertEquals("Rice", result.get().getName());
    }
}
