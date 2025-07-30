package com.javademo;

//Base class Worker
class Worker {
 protected String name;
 protected double salaryRate;

 public Worker(String name, double salaryRate) {
     this.name = name;
     this.salaryRate = salaryRate;
 }

 public double pay(int hours) {
     return 0; // Overridden in subclasses
 }

 public void displayPay(int hours) {
     System.out.println("Worker Name: " + name);
     System.out.println("Weekly Pay: ₹" + pay(hours));
     System.out.println("-----------------------------");
 }
}

//DailyWorker subclass
class DailyWorker extends Worker {

 public DailyWorker(String name, double salaryRate) {
     super(name, salaryRate);
 }

 @Override
 public double pay(int hours) {
     return salaryRate * hours;
 }
}

//SalariedWorker subclass
class SalariedWorker extends Worker {

 public SalariedWorker(String name, double salaryRate) {
     super(name, salaryRate);
 }

 @Override
 public double pay(int hours) {
     return salaryRate * 40; // Fixed 40-hour pay
 }
}

//Main class as Task13
public class Task13 {
 public static void main(String[] args) {
     DailyWorker dailyWorker = new DailyWorker("Alice", 100);        // ₹100 per hour
     SalariedWorker salariedWorker = new SalariedWorker("Bob", 120); // ₹120 per hour

     dailyWorker.displayPay(35);       // Paid for 35 hours
     salariedWorker.displayPay(35);    // Paid for 40 hours
 }
}
