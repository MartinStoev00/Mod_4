<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sign up</title>
	<link rel="stylesheet" href="../css/main.css">
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body class="signup">

	<%
		if (session.getAttribute("aid") != null) {
		response.sendRedirect("../posts/");
	}
	%>
	
	
	<div class="signup__container">
		<img class="signup__logo" src="../Pictures/logo.png" alt="Nedap">
		<h2 class="signup__heading">Sign up</h2>
		<form action="signupentr">
			<div class="input">
				<p class="input__label">First name</p>
				<p class="input__label">Last name</p>
				<p class="input__label">Email</p>
				<p class="input__label">Birth date</p>
				<p class="input__label">Gender</p>
				<p class="input__label">Password [A-Z a-z 0-9]</p>
				<p class="input__label">Repeat password</p>
				<div class="input__halves">
					<input required="required" class="input__text" type="text" name="firstname">
					<input required="required" class="input__text" type="text" name="lastname">
				</div>
				<input required="required" class="input__text" type="text" name="email">
				<div class="input__halves">
					<input required="required" class="input__text" type="date" max="2020-12-31" name="birthdate">
					<input required="required" class="input__text" type="text" name="gender" readonly value="other">
				</div>
				<input required="required" class="input__text" type="password" minlength = "8" pattern="[A-Za-z0-9]{8, 30}" name="password">
				<input required="required" class="input__text" type="password"  name="passwordagn">
				<div class="input__options">
					<p class="input__value">male</p>
					<p class="input__value">female</p>
					<p class="input__value">other</p>
				</div>
			</div>
			<div class="submit">
				<a class="submit__link" href="../login/" >Have an account?</a>
				<input type="submit" value="Signup" class="submit__btn">
			</div>
		</form>
	</div>
</body>
<script src="../scripts/form.js"></script>
</html>