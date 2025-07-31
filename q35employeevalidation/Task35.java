package q35employeevalidation;

import java.util.Scanner;

public class Task35 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter Employee Code (Format: EMP123): ");
            String code = sc.nextLine();

            // Validation using regex
            if (!code.matches("EMP\\d{3}")) {
                throw new InvalidEmployeeCode("Invalid Employee Code! Must be in the format EMP123.");
            }

            System.out.print("Enter Employee Name: ");
            String name = sc.nextLine();

            System.out.print("Enter Salary: ");
            double salary = sc.nextDouble();

            Employee emp = new Employee(code, name, salary);
            System.out.println("\n--- Employee Details ---");
            emp.display();

        } catch (InvalidEmployeeCode e) {
            System.out.println("Error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Unexpected Error: " + e.getMessage());
        }

        sc.close();
    }
}

