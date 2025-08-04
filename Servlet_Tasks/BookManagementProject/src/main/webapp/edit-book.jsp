<%@ page import="bookmanagement.Book" %>
<%
    Book book = (Book) request.getAttribute("book");
%>
<html>
<head><title>Edit Book</title></head>
<body>
<h2>Edit Book</h2>
<form action="updateBook" method="post">
    <input type="hidden" name="id" value="<%= book.getId() %>">
    Title: <input type="text" name="title" value="<%= book.getTitle() %>"><br>
    Author: <input type="text" name="author" value="<%= book.getAuthor() %>"><br>
    Price: <input type="number" step="0.01" name="price" value="<%= book.getPrice() %>"><br>
    <input type="submit" value="Update">
</form>
</body>
</html>
