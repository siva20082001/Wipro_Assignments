package q38serialization;

import java.io.*;
import java.util.*;

public class Task38 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input from user
        System.out.print("Enter Employee ID: ");
        int id = sc.nextInt();
        sc.nextLine(); // consume newline

        System.out.print("Enter Employee Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Employee Salary: ");
        double sal = sc.nextDouble();

        // Create Employee object
        Employee emp = new Employee(id, name, sal);

        // Serialize object to file
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("employee.ser"))) {
            out.writeObject(emp);
            System.out.println("\nEmployee object serialized successfully.\n");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Deserialize object from file
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("employee.ser"))) {
            Employee deserializedEmp = (Employee) in.readObject();
            System.out.println("Deserialized Employee Object:");
            deserializedEmp.display();
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }

        sc.close();
    }
}

