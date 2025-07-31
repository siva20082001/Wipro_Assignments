package org.animals;

public class Deer {
    private String color = "Brown";
    private int age = 3;
    private int weight = 80;

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Bleat";
    }

    public void display() {
        System.out.println("Deer -> Color: " + color + ", Age: " + age + ", Weight: " + weight);
    }
}