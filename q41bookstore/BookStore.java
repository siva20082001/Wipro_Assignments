package q41bookstore;

public class BookStore {
    private int bookId;
    private String bookName;

    public BookStore(int bookId, String bookName) {
        this.bookId = bookId;
        this.bookName = bookName;
    }

    public int getBookId() {
        return bookId;
    }

    public String getBookName() {
        return bookName;
    }

    @Override
    public String toString() {
        return "BookStore [bookId=" + bookId + ", bookName=" + bookName + "]";
    }
}
