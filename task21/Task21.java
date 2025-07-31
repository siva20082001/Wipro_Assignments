package task21;

public class Task21 {
    public static void main(String[] args) {
        Person athlete = new Athlete();
        Person lazy = new LazyPerson();

        System.out.println("== Athlete ==");
        athlete.eat();
        athlete.exercise();

        System.out.println("\n== Lazy Person ==");
        lazy.eat();
        lazy.exercise();
    }
}

