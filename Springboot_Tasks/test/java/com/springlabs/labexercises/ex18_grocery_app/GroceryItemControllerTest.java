package com.springlabs.labexercises.ex18_grocery_app;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(GroceryItemController.class)
public class GroceryItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GroceryItemService service;

    @Test
    void testListItems() throws Exception {
        GroceryItem item = new GroceryItem();
        item.setName("Sugar");
        item.setQuantity(1);
        item.setPrice(30);

        Mockito.when(service.findAll()).thenReturn(List.of(item));

        mockMvc.perform(get("/ex18/groceries"))
               .andExpect(status().isOk())
               .andExpect(view().name("grocery-list"))
               .andExpect(model().attributeExists("items"));
    }
}
