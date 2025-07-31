package task22;

public class Line implements Drawable, Fillable {

    @Override
    public void drawingColor() {
        System.out.println("Line Drawing Color: Black");
    }

    @Override
    public void thickness() {
        System.out.println("Line Thickness: 2px");
    }

    @Override
    public void fillingColor() {
        System.out.println("Line Filling Color: None");
    }

    @Override
    public void size() {
        System.out.println("Line Size: 100 units");
    }
}
