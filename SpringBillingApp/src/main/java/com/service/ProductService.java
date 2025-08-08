package com.service;

import com.bean.Product;
import com.dao.ProductDao;
import org.springframework.dao.EmptyResultDataAccessException;

public class ProductService {
    private ProductDao productDao;

    public void setProductDao(ProductDao productDao) {
        this.productDao = productDao;
    }

    public Product getProductDetails(int code) {
        try {
            return productDao.getProductDetails(code);
        } catch (EmptyResultDataAccessException e) {
            return null; // Return null when no product found
        }
    }

    public double calculatePrice(int quantity, double price) {
        return quantity * price;
    }

    public boolean validateProductCode(int code) {
        return (code > 0 && String.valueOf(code).length() == 4);
    }

    public boolean validateQuantity(int qty) {
        return qty > 0;
    }
}
