<%@ page import="bank.BankAccount" %>
<%
    BankAccount account = (BankAccount) request.getAttribute("account");
%>
<html>
<head><title>Account Details</title></head>
<body>
<h2>Account Information</h2>
<p><b>Account Holder:</b> <%= account.getAccountHolder() %></p>
<p><b>Balance:</b> ₹<%= account.getBalance() %></p>
<br>
<a href="accountForm.jsp">Back</a>
</body>
</html>
