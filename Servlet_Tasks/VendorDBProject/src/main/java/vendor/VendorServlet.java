package vendor;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/vendor")
public class VendorServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String vendorName = request.getParameter("name");
        String vendorEmail = request.getParameter("email");
        String vendorAddress = request.getParameter("address");

        request.setAttribute("name", vendorName);
        request.setAttribute("email", vendorEmail);
        request.setAttribute("address", vendorAddress);

        RequestDispatcher rd = request.getRequestDispatcher("vendorInfo.jsp");
        rd.forward(request, response);
    }
}

