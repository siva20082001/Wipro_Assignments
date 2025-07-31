package task19;

import java.util.Scanner;

public class Task19 {
    public static void main(String[] args) {
        Bank[] customers = new Bank[] {
            new Saving("S101", "Ravi", 1, "Engineer", 5000, 0.05),
            new Saving("S102", "Priya", 2, "Teacher", 7000, 0.04),
            new Current("C201", "Arjun", 1, "Doctor", 8000, 0.03, true),
            new Current("C202", "Meena", 2, "Manager", 6000, 0.025, false),
            new Current("C203", "Deepak", 1, "Lawyer", 9000, 0.035, true)
        };

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter account number to search: ");
        String searchAcc = sc.nextLine();
        boolean found = false;
        for (Bank b : customers) {
            if (b.getAccNo().equalsIgnoreCase(searchAcc)) {
                System.out.println("\nCustomer Details:");
                System.out.println(b);
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("No customer found with account number " + searchAcc);
        }

        int count = 0;
        double totalBalance = 0;
        for (Bank b : customers) {
            if (b instanceof Current) {
                count++;
                totalBalance += b.calcBalance();
            }
        }

        System.out.println("\nTotal Current Account Holders: " + count);
        System.out.println("Total Balance of Current Accounts: RM" + String.format("%.2f", totalBalance));

        sc.close();
    }
}

