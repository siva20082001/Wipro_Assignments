package com.javademo;

import java.util.*;

public class Task32 {
    public static void main(String[] args) {

        // 1. NegativeArraySizeException
        try {
            int[] arr = new int[-5];
        } catch (NegativeArraySizeException e) {
            System.out.println("Caught NegativeArraySizeException");
            e.printStackTrace();
        }

        // 2. ArrayIndexOutOfBoundsException
        try {
            int[] arr = new int[3];
            int a = arr[5];
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught ArrayIndexOutOfBoundsException");
            e.printStackTrace();
        }

        // 3. StringIndexOutOfBoundsException
        try {
            String str = "Java";
            char c = str.charAt(10);
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("Caught StringIndexOutOfBoundsException");
            e.printStackTrace();
        }

        // 4. IndexOutOfBoundsException
        try {
            List<Integer> list = new ArrayList<>();
            list.get(1);
        } catch (IndexOutOfBoundsException e) {
            System.out.println("Caught IndexOutOfBoundsException");
            e.printStackTrace();
        }

        // 5. NullPointerException
        try {
            String s = null;
            s.length();
        } catch (NullPointerException e) {
            System.out.println("Caught NullPointerException");
            e.printStackTrace();
        }

        // 6. ArithmeticException
        try {
            int x = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException");
            e.printStackTrace();
        }
    }
}

