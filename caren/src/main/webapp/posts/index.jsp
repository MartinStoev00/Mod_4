<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Posts</title>
	<link rel="stylesheet" href="../css/main.css">
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
		<div class="form">
			<input class="form__search" type="text" placeholder="Search...">
			<div class="dropdown"></div>
			<button class="form__btn  fa fa-search" type="submit"></button>
		</div>
		<div class="header__buttons">
			<button class="header__myProfile fas fa-user-circle" onclick="location.href='http://localhost:8080/caren/posts/'"></button>
			<button class="header__notify fas fa-bell"></button>
			<button class="header__home fas fa-home" onclick="location.href='http://localhost:8080/caren/main/'"></button>
			<form action="../signout">
				<button type="submit" class="header__logout fas fa-sign-out-alt"></button>
			</form>
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
		<div class="posts__header">
			<div class="filters">
				<div class="filters__line">
					<p class="filters__labels">Search according to title name: </p>
					<input class="filters__search" type="text" placeholder="Title">
				</div>
				<div class="filters__line">
					<p class="filters__labels">Filter: </p>
					<button class="filters__filter">Filter <i class="fas fa-caret-down"></i></button>
					<p class="filters__labels">Sort: </p>
					<button class="filters__filter">Sorting <i class="fas fa-caret-down"></i></button>
					<button class="filters__reset">Reset</button>
					<div class="filters__box">
						<p class="box__text">From: </p>
						<input class="box__date" type="date">
						<p class="box__text">To: </p>
						<input class="box__date" type="date">
						<button class="box__btn">Filter</button>
					</div>
					<div class="filters__box">
						<button class="box__btn">Alphabetically</button>
						<button class="box__btn">Oldest to Newest</button>
						<button class="box__btn">Newest to Oldest</button>
					</div>
				</div>
			</div>
		</div>
		<div class="posts"></div>
	</div>
</body>
<script type="module" src="../main.js"></script>
</html>