package bookmanagement;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/updateBook")
public class UpdateBookServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private BookDAO dao = new BookDAO();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        String title = request.getParameter("title");
        String author = request.getParameter("author");
        double price = Double.parseDouble(request.getParameter("price"));

        dao.updateBook(new Book(id, title, author, price));
        response.sendRedirect("listBooks");
    }
}

