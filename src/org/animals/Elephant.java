package org.animals;

public class Elephant {
    private String color = "Grey";
    private int age = 25;
    private int weight = 5000;

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Trumpet";
    }

    public void display() {
        System.out.println("Elephant -> Color: " + color + ", Age: " + age + ", Weight: " + weight);
    }
}

