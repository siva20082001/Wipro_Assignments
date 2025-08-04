<%@ page import="java.util.*, bookmanagement.Book" %>
<html>
<head><title>Book List</title></head>
<body>
<h2>Book List</h2>
<a href="add-book.jsp">Add New Book</a>
<table border="1">
<tr><th>ID</th><th>Title</th><th>Author</th><th>Price</th><th>Actions</th></tr>
<%
    List<Book> books = (List<Book>) request.getAttribute("books");
    if (books != null) {
        for (Book book : books) {
%>
<tr>
    <td><%= book.getId() %></td>
    <td><%= book.getTitle() %></td>
    <td><%= book.getAuthor() %></td>
    <td><%= book.getPrice() %></td>
    <td>
        <a href="editBook?id=<%= book.getId() %>">Edit</a> |
        <a href="deleteBook?id=<%= book.getId() %>">Delete</a>
    </td>
</tr>
<% } } %>
</table>
</body>
</html>
