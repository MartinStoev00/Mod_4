<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Posts</title>
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
	
	<div class="header" name="header">
		<img class="header__logo" src="../Pictures/website_icon.png" alt="">
		<form class="form" action="#">
			<input class="form__search" type="text" placeholder="Search...">
			<div class="dropdown"></div>
			<button class="form__btn  fa fa-search" type="submit"></button>
		</form>
		<div class="header__buttons">
			<button class="header__myProfile fas fa-user-circle"></button>
			<button class="header__notify fas fa-bell"></button>
			<div class="notifications"></div>
			<div class="notifications__triangle"></div>
			<p class="notifications__number"></p>
			<div class="arrow"></div>
		</div>
	</div>
	<div class="sidebar">
		<ul class="sidebar__content">
			<li class="sidebar__link" data-link="1.jpg"><i class="far fa-copy"></i>Reports</li>
			<li class="sidebar__link" data-link="2.jpg"><i class="fas fa-chart-bar"></i>Statistics 1</li>
			<li class="sidebar__link" data-link="3.jpg"><i class="fas fa-chart-bar"></i>Statistics 2</li>
			<li class="sidebar__link" data-link="4.jpg"><i class="fas fa-chart-bar"></i>Statistics 3</li>
		</ul>
		<div class="people"></div>
	</div>
	<div class="mainPosts">
		<div class="posts"></div>
	</div>
</body>
<script type="module" src="../main.js"></script>
</html>