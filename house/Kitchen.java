package house;

import java.util.Arrays;

public class Kitchen {
    public void showAppliances() {
        String[] appliances = {"Fridge", "Microwave", "Stove", "Mixer"};
        
        System.out.println("Original Appliances:");
        for (String item : appliances) {
            System.out.println(item);
        }

        // Copy appliances into another array
        String[] copiedAppliances = Arrays.copyOf(appliances, appliances.length);

        System.out.println("\nCopied Appliances:");
        for (String item : copiedAppliances) {
            System.out.println(item);
        }
    }
}

