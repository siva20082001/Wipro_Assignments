package marks;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/input")
public class InputServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int marks1 = Integer.parseInt(request.getParameter("marks1"));
        int marks2 = Integer.parseInt(request.getParameter("marks2"));
        int marks3 = Integer.parseInt(request.getParameter("marks3"));

        int total = marks1 + marks2 + marks3;
        double average = total / 3.0;

        request.setAttribute("marks1", marks1);
        request.setAttribute("marks2", marks2);
        request.setAttribute("marks3", marks3);
        request.setAttribute("total", total);
        request.setAttribute("average", average);

        RequestDispatcher rd = request.getRequestDispatcher("grade");
        rd.forward(request, response);
    }
}
