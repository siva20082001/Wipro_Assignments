package org.animals;

public class Monkey {
    private String color = "Grey";
    private int age = 4;
    private int weight = 40;

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return true;
    }

    public String sound() {
        return "Chatter";
    }

    public void display() {
        System.out.println("Monkey -> Color: " + color + ", Age: " + age + ", Weight: " + weight);
    }
}
