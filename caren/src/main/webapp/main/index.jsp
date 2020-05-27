<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Main</title>
	<link rel="stylesheet" href="main.css">
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel="stylesheet" href="../fontawesome-free-5.13.0-web/css/all.min.css">
</head>
<body>
	<%
		if (session.getAttribute("aid") == null) {
			response.sendRedirect("http://localhost:8080/caren/login/");
		}
	
	%>

	<div class="header">
		<img class="header__logo" src="../Pictures/website_icon.png" alt="">
		<form class="form" action="#">
			<input class="form__search" type="text" placeholder="Search...">
			<div class="dropdown"></div>
			<i class="form__btn  fa fa-search"></i>
		</form>
		<div class="header__buttons">
			<button class="header__myProfile fas fa-user-circle"></button>
			<button class="header__notify fas fa-bell"></button>
			<button class="header__logout fas fa-sign-out-alt"></button>
			<div class="notifications"></div>
			<div class="notifications__triangle"></div>
			<p class="notifications__number"></p>
			<div class="arrow"></div>
		</div>
	</div>
	<div class="main"></div>
</body>
<script type="module" src="../main.js"></script>
</html>