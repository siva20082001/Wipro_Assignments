package task22;

public class Square implements Drawable, Fillable {

    @Override
    public void drawingColor() {
        System.out.println("Square Drawing Color: Green");
    }

    @Override
    public void thickness() {
        System.out.println("Square Thickness: 3px");
    }

    @Override
    public void fillingColor() {
        System.out.println("Square Filling Color: Yellow");
    }

    @Override
    public void size() {
        System.out.println("Square Side Length: 50 units");
    }
}
