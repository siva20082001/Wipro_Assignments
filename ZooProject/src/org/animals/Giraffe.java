package org.animals;

public class Giraffe {
    private String color = "Yellow with brown spots";
    private int age = 6;
    private int weight = 800;

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Hum";
    }

    public void display() {
        System.out.println("Giraffe -> Color: " + color + ", Age: " + age + ", Weight: " + weight);
    }
}
