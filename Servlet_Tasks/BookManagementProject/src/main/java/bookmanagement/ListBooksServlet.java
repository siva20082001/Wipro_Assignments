package bookmanagement;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/listBooks")
public class ListBooksServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private BookDAO dao = new BookDAO();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("books", dao.getAllBooks());
        RequestDispatcher rd = request.getRequestDispatcher("book-list.jsp");
        rd.forward(request, response);
    }
}
