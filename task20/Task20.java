package task20;

public class Task20 {
    public static void main(String[] args) {
        Vehicle car = new Car();
        Vehicle bike = new Motorcycle();

        System.out.println("== Car ==");
        car.startEngine();
        car.stopEngine();

        System.out.println("\n== Motorcycle ==");
        bike.startEngine();
        bike.stopEngine();
    }
}
