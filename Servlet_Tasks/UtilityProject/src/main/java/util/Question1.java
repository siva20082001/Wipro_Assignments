package util;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/question1")
public class Question1 extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String studentName = request.getParameter("name");
        String studentId = request.getParameter("id");
        String course = request.getParameter("course");

        request.setAttribute("name", studentName);
        request.setAttribute("id", studentId);
        request.setAttribute("course", course);

        RequestDispatcher rd = request.getRequestDispatcher("form.jsp");
        rd.forward(request, response);
    }
}
