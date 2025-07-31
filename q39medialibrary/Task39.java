package q39medialibrary;

public class Task39 {
    public static void main(String[] args) {

        // Without Generics
        System.out.println("=== Library Without Generics ===");
        LibraryWithoutGenerics lib1 = new LibraryWithoutGenerics();
        lib1.add(new Book("The Alchemist"));
        lib1.add(new Video("Inception"));
        lib1.add(new Newspaper("The Hindu"));

        for (Object item : lib1.retrieve()) {
            System.out.println(item.toString());
        }

        // With Generics
        System.out.println("\n=== Library With Generics ===");
        LibraryWithGenerics<Book> bookLibrary = new LibraryWithGenerics<>();
        bookLibrary.add(new Book("1984"));

        LibraryWithGenerics<Video> videoLibrary = new LibraryWithGenerics<>();
        videoLibrary.add(new Video("Interstellar"));

        LibraryWithGenerics<Newspaper> newsLibrary = new LibraryWithGenerics<>();
        newsLibrary.add(new Newspaper("The Times of India"));

        for (Book b : bookLibrary.retrieve()) {
            System.out.println(b);
        }
        for (Video v : videoLibrary.retrieve()) {
            System.out.println(v);
        }
        for (Newspaper n : newsLibrary.retrieve()) {
            System.out.println(n);
        }
    }
}

