<%@ page import="cart.Product" %>
<%
    Product product = (Product) session.getAttribute("product");
%>
<html>
<head><title>Add to Cart</title></head>
<body>
<h2>Add Product to Cart</h2>
<form action="addToCart" method="post">
    Name: <input type="text" name="name" value="<%= product.getName() %>" readonly><br>
    Price: <input type="text" name="price" value="<%= product.getPrice() %>" readonly><br>
    <input type="submit" value="Add to Cart">
</form>
<br>
<a href="viewCart">View Cart</a>
</body>
</html>
