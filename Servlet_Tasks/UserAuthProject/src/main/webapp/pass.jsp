<%@ page session="true" %>
<html>
<head><title>Welcome</title></head>
<body>
<h2>Login Successful!</h2>
<p>Welcome, <%= session.getAttribute("username") %>!</p>
<a href="logout">Logout</a>
</body>
</html>
