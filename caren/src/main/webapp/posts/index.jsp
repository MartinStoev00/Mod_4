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
			<li class="sidebar__link" data-link="text"><span><i class="far fa-copy"></i>Text</span><i class="fas fa-check"></i></li>
			<li class="sidebar__link" data-link="height"><span><i class="fas fa-ruler"></i>Height</span><i class="fas fa-check"></i></li>
			<li class="sidebar__link" data-link="weight"><span><i class="fas fa-weight"></i>Weight</span><i class="fas fa-check"></i></li>
			<li class="sidebar__link" data-link="blood_pressure"><span><i class="fas fa-tint"></i>Blood Pressure</span><i class="fas fa-check"></i></li>
			<li class="sidebar__link" data-link="other"><span><i class="fas fa-chart-bar"></i>Other</span><i class="fas fa-check"></i></li>
		</ul>
		<div class="sidebar__nav">
			<button class="sidebar__control">Filter</button>
			<button class="sidebar__control">People</button>
		</div>
		<div class="filters">
			<input class="filters__search" type="text" placeholder="Search Term">
			<button class="filters__filter">Oldest to Newest <i class="fas fa-caret-down"></i></button>
			<div class="filters__box">
				<button class="box__btn">Newest to Oldest</button>
			</div>
			<div class="filters__date">
				<div class="date__line">
					<p class="date__text">From: </p>
					<input class="date__date" type="date">
				</div>
				<div class="date__separate"></div>
				<div class="date__line">
					<p class="date__text">To: </p>
					<input class="date__date" type="date">
				</div>
			</div>
			<button class="filters__reset">Reset</button>
		</div>
		<div class="people"></div>
	</div>
	<div class="mainPosts">
		<div class="posts"></div>
	</div>
</body>
<script type="module" src="../main.js"></script>
</html>