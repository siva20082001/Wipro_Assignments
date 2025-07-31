package q36tank;

public class Tank {
    private boolean isReleased = false;

    public void fill() {
        System.out.println("Tank is filled.");
    }

    public void empty() {
        System.out.println("Tank is emptied.");
    }

    public void releaseTank() {
        isReleased = true;
        System.out.println("Tank is released properly.");
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            if (!isReleased) {
                System.out.println("Warning: Tank not released properly before garbage collection!");
            } else {
                System.out.println("Tank finalized successfully.");
            }
        } finally {
            super.finalize();
        }
    }
}
