package q40cdsorter;

import java.util.*;

public class Task40 {
    public static void main(String[] args) {
        List<CD> cdList = new ArrayList<>();

        cdList.add(new CD("Fearless", "Taylor Swift"));
        cdList.add(new CD("Divide", "Ed Sheeran"));
        cdList.add(new CD("Thriller", "Michael Jackson"));
        cdList.add(new CD("Justice", "Justin Bieber"));

        System.out.println("Before Sorting:");
        for (CD cd : cdList) {
            System.out.println(cd);
        }

        Collections.sort(cdList);  // Uses compareTo from Comparable

        System.out.println("\nAfter Sorting by Singer Name:");
        for (CD cd : cdList) {
            System.out.println(cd);
        }
    }
}

