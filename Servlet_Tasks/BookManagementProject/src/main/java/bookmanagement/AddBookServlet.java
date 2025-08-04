package bookmanagement;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/addBook")
public class AddBookServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private BookDAO dao = new BookDAO();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String title = request.getParameter("title");
        String author = request.getParameter("author");
        double price = Double.parseDouble(request.getParameter("price"));

        dao.addBook(new Book(0, title, author, price));
        response.sendRedirect("listBooks");
    }
}
