package org.animals;

public class Tiger {
    private String color = "Orange with black stripes";
    private int age = 5;
    private int weight = 220;

    public boolean isVegetarian() {
        return false;
    }

    public boolean canClimb() {
        return true;
    }

    public String sound() {
        return "Growl";
    }

    public void display() {
        System.out.println("Tiger -> Color: " + color + ", Age: " + age + ", Weight: " + weight);
    }
}
