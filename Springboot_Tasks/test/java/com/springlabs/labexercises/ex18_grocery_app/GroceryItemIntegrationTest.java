package com.springlabs.labexercises.ex18_grocery_app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class GroceryItemIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testLoadGroceryPage() throws Exception {
        mockMvc.perform(get("/ex18/groceries"))
               .andExpect(status().isOk())
               .andExpect(view().name("grocery-list"))
               .andExpect(model().attributeExists("items"));
    }
}
