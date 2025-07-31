package task22;

public class Task22 {
    public static void main(String[] args) {
        Drawable d;
        Fillable f;

        System.out.println("=== Line ===");
        Line line = new Line();
        d = line; f = line;
        d.drawingColor(); d.thickness();
        f.fillingColor(); f.size();

        System.out.println("\n=== Circle ===");
        Circle circle = new Circle();
        d = circle; f = circle;
        d.drawingColor(); d.thickness();
        f.fillingColor(); f.size();

        System.out.println("\n=== Square ===");
        Square square = new Square();
        d = square; f = square;
        d.drawingColor(); d.thickness();
        f.fillingColor(); f.size();
    }
}

