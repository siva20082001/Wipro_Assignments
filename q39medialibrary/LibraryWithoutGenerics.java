package q39medialibrary;

import java.util.*;

public class LibraryWithoutGenerics {
    private List mediaList = new ArrayList();

    public void add(Object media) {
        mediaList.add(media);
    }

    public List retrieve() {
        return mediaList;
    }
}

