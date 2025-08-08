package com.springlabs.labexercises.ex12_jdbc_mysql;

public class Book {
    private int bookid;
    private String bookname;
    private String author;
    private double price;

    // Getters and setters
    public int getBookid() { return bookid; }
    public void setBookid(int bookid) { this.bookid = bookid; }

    public String getBookname() { return bookname; }
    public void setBookname(String bookname) { this.bookname = bookname; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}


//Add Book
//POST → http://localhost:8080/ex12/books/add
//
//Body (raw JSON):
//
//json
//{
//  "bookid": 1,
//  "bookname": "Spring Boot Basics",
//  "author": "Siva",
//  "price": 499.0
//}

//Get All Books
//GET → http://localhost:8080/ex12/books
//
//Get Book by ID
//GET → http://localhost:8080/ex12/books/1


//Update Book
//PUT → http://localhost:8080/ex12/books/update
//
//Body:
//
//json
//{
//  "bookid": 1,
//  "bookname": "Spring Boot Advanced",
//  "author": "Siva Reddy",
//  "price": 599.0
//}

//Delete Book
//DELETE → http://localhost:8080/ex12/books/delete/1