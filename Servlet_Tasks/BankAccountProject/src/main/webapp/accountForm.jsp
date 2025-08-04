<html>
<head><title>Bank Account Form</title></head>
<body>
<h2>Enter Account Details</h2>
<form action="balance" method="post">
    Account Holder: <input type="text" name="holder" required><br><br>
    Balance: <input type="number" step="0.01" name="balance" required><br><br>
    <input type="submit" value="Show Balance">
</form>
</body>
</html>
