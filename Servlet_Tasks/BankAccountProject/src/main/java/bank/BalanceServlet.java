package bank;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/balance")
public class BalanceServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String holder = request.getParameter("holder");
        double balance = Double.parseDouble(request.getParameter("balance"));

        BankAccount account = new BankAccount(holder, balance);

        request.setAttribute("account", account);
        RequestDispatcher rd = request.getRequestDispatcher("showAccount.jsp");
        rd.forward(request, response);
    }
}

