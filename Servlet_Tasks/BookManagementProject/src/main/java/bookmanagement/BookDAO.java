package bookmanagement;

import java.util.ArrayList;
import java.util.List;

public class BookDAO {
    private static List<Book> books = new ArrayList<>();
    private static int idCounter = 1;

    public void addBook(Book book) {
        book.setId(idCounter++);
        books.add(book);
    }

    public List<Book> getAllBooks() {
        return books;
    }

    public Book getBookById(int id) {
        for (Book book : books) {
            if (book.getId() == id) return book;
        }
        return null;
    }

    public void updateBook(Book updatedBook) {
        for (Book book : books) {
            if (book.getId() == updatedBook.getId()) {
                book.setTitle(updatedBook.getTitle());
                book.setAuthor(updatedBook.getAuthor());
                book.setPrice(updatedBook.getPrice());
                break;
            }
        }
    }

    public void deleteBook(int id) {
        books.removeIf(book -> book.getId() == id);
    }
}
