<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Log in</title>
<link rel="stylesheet" href="../css/main.css">
<meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body class="login">

	<%
		if (session.getAttribute("aid") != null) {
		response.sendRedirect("../posts/");
	}
	%>

	<div class="login__container">
		<img class="login__logo" src="../Pictures/logo.png" alt="Nedap">
		<h2 class="login__heading">Log In</h2>
		<form action="loginentr">
			<div class="input">
				<p class="input__label">Email</p>
				<p class="input__label">Password</p>
				<input class="input__text" type="text" name="email"> <input
					class="input__text" type="password" name="password">
			</div>
			<div class="submit">
				<div class="submit__link">
					<a class="submit__links" href="../signup/index.jsp">Make an account</a>
				</div>
				<input type="submit" class="submit__btn" value="Login">
			</div>
		</form>
	</div>
</body>
<script src="../scripts/form.js"></script>
</html>