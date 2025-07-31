package q35employeevalidation;

public class Employee {
    private String empCode;
    private String name;
    private double salary;

    public Employee(String empCode, String name, double salary) {
        this.empCode = empCode;
        this.name = name;
        this.salary = salary;
    }

    public void display() {
        System.out.println("Employee Code: " + empCode);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }
}
