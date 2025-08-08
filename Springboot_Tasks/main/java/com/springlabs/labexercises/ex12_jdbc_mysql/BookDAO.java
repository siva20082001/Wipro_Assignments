package com.springlabs.labexercises.ex12_jdbc_mysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int addBook(Book book) {
        String sql = "INSERT INTO books VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, book.getBookid(), book.getBookname(), book.getAuthor(), book.getPrice());
    }

    public List<Book> getAllBooks() {
        return jdbcTemplate.query("SELECT * FROM books", new BeanPropertyRowMapper<>(Book.class));
    }

    public Book getBookById(int id) {
        String sql = "SELECT * FROM books WHERE bookid = ?";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Book.class), id);
    }

    public int deleteBook(int id) {
        return jdbcTemplate.update("DELETE FROM books WHERE bookid = ?", id);
    }

    public int updateBook(Book book) {
        String sql = "UPDATE books SET bookname=?, author=?, price=? WHERE bookid=?";
        return jdbcTemplate.update(sql, book.getBookname(), book.getAuthor(), book.getPrice(), book.getBookid());
    }
}
