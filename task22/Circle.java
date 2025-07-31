package task22;

public class Circle implements Drawable, Fillable {

    @Override
    public void drawingColor() {
        System.out.println("Circle Drawing Color: Red");
    }

    @Override
    public void thickness() {
        System.out.println("Circle Thickness: 4px");
    }

    @Override
    public void fillingColor() {
        System.out.println("Circle Filling Color: Blue");
    }

    @Override
    public void size() {
        System.out.println("Circle Radius: 20 units");
    }
}
