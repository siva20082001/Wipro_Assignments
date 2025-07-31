package q36tank;

public class Task36 {
    public static void main(String[] args) {
        System.out.println("Creating Tank1 and releasing it:");
        Tank tank1 = new Tank();
        tank1.fill();
        tank1.empty();
        tank1.releaseTank();
        tank1 = null;

        System.out.println("\nCreating Tank2 and not releasing it:");
        Tank tank2 = new Tank();
        tank2.fill();
        tank2.empty();
        // tank2.releaseTank();  // Deliberately not called
        tank2 = null;

        System.gc(); // Suggest garbage collection

        // Pause to give GC time to run
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("End of main.");
    }
}
