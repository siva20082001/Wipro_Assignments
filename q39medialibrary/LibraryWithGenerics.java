package q39medialibrary;

import java.util.*;

public class LibraryWithGenerics<T> {
    private List<T> mediaList = new ArrayList<>();

    public void add(T media) {
        mediaList.add(media);
    }

    public List<T> retrieve() {
        return mediaList;
    }
}

