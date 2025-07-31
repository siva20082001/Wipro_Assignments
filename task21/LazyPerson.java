package task21;

public class LazyPerson extends Person {

    @Override
    public void eat() {
        System.out.println("Lazy person eats fast food and snacks frequently.");
    }

    @Override
    public void exercise() {
        System.out.println("Lazy person rarely exercises.");
    }
}

