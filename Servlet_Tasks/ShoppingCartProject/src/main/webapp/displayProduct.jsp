<%@ page import="java.util.*, cart.Product" %>
<html>
<head><title>Shopping Cart</title></head>
<body>
<h2>Your Shopping Cart</h2>
<%
    List<Product> cart = (List<Product>) request.getAttribute("cart");
    if (cart != null && !cart.isEmpty()) {
%>
    <table border="1">
        <tr><th>Name</th><th>Price</th></tr>
        <% for (Product p : cart) { %>
            <tr>
                <td><%= p.getName() %></td>
                <td><%= p.getPrice() %></td>
            </tr>
        <% } %>
    </table>
<% } else { %>
    <p>Your cart is empty.</p>
<% } %>
<br>
<a href="product.html">Add More Products</a>
</body>
</html>
