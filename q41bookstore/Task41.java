package q41bookstore;

import java.util.*;

public class Task41 {
    public static void main(String[] args) {
        List<BookStore> books = new ArrayList<>();

        books.add(new BookStore(103, "Java Programming"));
        books.add(new BookStore(101, "Data Structures"));
        books.add(new BookStore(102, "Algorithms"));
        books.add(new BookStore(104, "Computer Networks"));

        System.out.println("Original List:");
        for (BookStore book : books) {
            System.out.println(book);
        }

        // Sort by Book Name
        books.sort(Comparator.comparing(BookStore::getBookName));
        System.out.println("\nSorted by Book Name:");
        for (BookStore book : books) {
            System.out.println(book);
        }

        // Sort by Book ID
        books.sort(Comparator.comparingInt(BookStore::getBookId));
        System.out.println("\nSorted by Book ID:");
        for (BookStore book : books) {
            System.out.println(book);
        }
    }
}
