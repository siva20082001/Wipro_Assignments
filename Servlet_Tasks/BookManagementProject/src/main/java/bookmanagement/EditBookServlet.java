package bookmanagement;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/editBook")
public class EditBookServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private BookDAO dao = new BookDAO();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        request.setAttribute("book", dao.getBookById(id));
        request.getRequestDispatcher("edit-book.jsp").forward(request, response);
    }
}
