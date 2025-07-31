package org.animals;



public class Lion {
    private String color = "Golden";
    private int age = 8;
    private int weight = 190;

    public boolean isVegetarian() { return false; }
    public boolean canClimb() { return false; }
    public String sound() { return "Roar"; }

    public void display() {
        System.out.println("Lion -> Color: " + color + ", Age: " + age + ", Weight: " + weight);
    }
}

