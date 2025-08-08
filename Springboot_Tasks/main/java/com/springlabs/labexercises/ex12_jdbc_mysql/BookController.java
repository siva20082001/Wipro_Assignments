package com.springlabs.labexercises.ex12_jdbc_mysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ex12/books")
public class BookController {

    @Autowired
    private BookDAO dao;

    @PostMapping("/add")
    public String addBook(@RequestBody Book book) {
        dao.addBook(book);
        return "✅ Book added!";
    }

    @GetMapping
    public List<Book> getAll() {
        return dao.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable int id) {
        return dao.getBookById(id);
    }

    @PutMapping("/update")
    public String update(@RequestBody Book book) {
        dao.updateBook(book);
        return "✅ Book updated!";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        dao.deleteBook(id);
        return "❌ Book deleted!";
    }
}
