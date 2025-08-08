package com.example.SpringBootBook;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookDAO bookDAO;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookDAO.getAllBooks();
    }

    @PostMapping
    public String addBook(@RequestBody Book book) {
        bookDAO.addBook(book);
        return "Book added successfully!";
    }
}
