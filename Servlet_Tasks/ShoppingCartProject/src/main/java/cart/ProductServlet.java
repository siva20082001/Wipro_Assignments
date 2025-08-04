package cart;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/product")
public class ProductServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String productName = request.getParameter("product");
        double price = Double.parseDouble(request.getParameter("price"));

        Product product = new Product(productName, price);
        HttpSession session = request.getSession();
        session.setAttribute("product", product);

        RequestDispatcher rd = request.getRequestDispatcher("productForm.jsp");
        rd.forward(request, response);
    }
}

