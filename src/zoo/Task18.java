package zoo;



import org.animals.*;

public class Task18 {
    public static void main(String[] args) {
        Lion lion = new Lion();
        Tiger tiger = new Tiger();
        Deer deer = new Deer();
        Monkey monkey = new Monkey();
        Elephant elephant = new Elephant();
        Giraffe giraffe = new Giraffe();

        System.out.println("Welcome to Vandalur Zoo!\n");

        lion.display();
        System.out.println("Vegetarian: " + lion.isVegetarian());
        System.out.println("Can Climb: " + lion.canClimb());
        System.out.println("Sound: " + lion.sound() + "\n");

        tiger.display();
        System.out.println("Vegetarian: " + tiger.isVegetarian());
        System.out.println("Can Climb: " + tiger.canClimb());
        System.out.println("Sound: " + tiger.sound() + "\n");

        deer.display();
        System.out.println("Vegetarian: " + deer.isVegetarian());
        System.out.println("Can Climb: " + deer.canClimb());
        System.out.println("Sound: " + deer.sound() + "\n");

        monkey.display();
        System.out.println("Vegetarian: " + monkey.isVegetarian());
        System.out.println("Can Climb: " + monkey.canClimb());
        System.out.println("Sound: " + monkey.sound() + "\n");

        elephant.display();
        System.out.println("Vegetarian: " + elephant.isVegetarian());
        System.out.println("Can Climb: " + elephant.canClimb());
        System.out.println("Sound: " + elephant.sound() + "\n");

        giraffe.display();
        System.out.println("Vegetarian: " + giraffe.isVegetarian());
        System.out.println("Can Climb: " + giraffe.canClimb());
        System.out.println("Sound: " + giraffe.sound() + "\n");
    }
}
