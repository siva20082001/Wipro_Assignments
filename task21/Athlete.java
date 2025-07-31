package task21;

public class Athlete extends Person {

    @Override
    public void eat() {
        System.out.println("Athlete eats a high-protein and balanced diet.");
    }

    @Override
    public void exercise() {
        System.out.println("Athlete exercises for 3 hours daily.");
    }
}
