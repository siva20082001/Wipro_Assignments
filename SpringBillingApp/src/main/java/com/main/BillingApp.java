package com.main;

import java.util.Scanner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.bean.Product;
import com.service.*;

public class BillingApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        ProductService service = (ProductService) context.getBean("productService");
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("1. Generate Bill\n2. Exit");
            int choice = sc.nextInt();
            if (choice == 2) break;
            try {
                System.out.println("Enter product_code:");
                int code = sc.nextInt();
                if (!service.validateProductCode(code))
                    throw new BillingException("Invalid product_code, it should be >0 and 4 digit +ve number");

                System.out.println("Enter quantity:");
                int qty = sc.nextInt();
                if (!service.validateQuantity(qty))
                    throw new BillingException("Invalid quantity, it should be >0");

                Product p = service.getProductDetails(code);
                if (p == null) {
                    System.out.println("No product found with code: " + code);
                    continue;
                }

                double total = service.calculatePrice(qty, p.getProduct_price());
                System.out.println("Product Name: " + p.getProduct_name());
                System.out.println("Product Category: " + p.getProduct_category());
                System.out.println("Product Description: " + p.getProduct_description());
                System.out.println("Product Price(Rs): " + p.getProduct_price());
                System.out.println("Quantity: " + qty);
                System.out.println("Total Bill Amount: Rs." + total);

            } catch (BillingException e) {
                System.out.println(e.getMessage());
            }
        }
        sc.close();
    }
}
