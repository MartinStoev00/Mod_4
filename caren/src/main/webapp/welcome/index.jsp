<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<title>Document</title>
	<link rel="stylesheet" href="../css/main.css">
	<link rel="stylesheet" href="../fontawesome-free-5.13.0-web/css/all.min.css">
</head>
<body>

	<%
	if (session.getAttribute("aid") != null) {
		response.sendRedirect("../posts/");
	}
	%>
	<div class="welcome">
		<div class="welcome__container">
			<img class="welcome__logo" src="../Pictures/logo.png" alt="Nedap">
			<h2 class="welcome__heading">Welcome</h2>
			<div class="options">
				<div class="options__box" style="cursor: pointer;">
					<p class="options__text">Would you like to log in?</p>
					<i class="options__icon fas fa-sign-in-alt"></i>
				</div>
				<p class="options__or">OR</p>
				<div class="options__box" style="cursor: pointer;">
					<p class="options__text">Would you like to sign up?</p>
					<i class="options__icon fas fa-user-plus"></i>
				</div>
			</div>
		</div>
	</div>
</body>
<script>
	let options = document.getElementsByClassName("options__box");
	let icons = document.getElementsByClassName("options__icon");
	let texts = document.getElementsByClassName("options__text");

 	Array.prototype.forEach.call(options, (option, index) => {
        let icon = icons[index];
        let text = texts[index];
        option.addEventListener("mouseover", function(){
			this.style.backgroundColor = "#eee";
			text.style.color = "#000";
			icon.style.filter = "opacity(100%)";
			icon.style.marginLeft = "13px";
			icon.style.marginRight = "-13px";
		});
        option.addEventListener("mouseout", function(){
			this.style.backgroundColor = "#fafafa";
			text.style.color = "#555";
			icon.style.filter = "opacity(60%)";
			icon.style.marginLeft = "8px";
			icon.style.marginRight = "-8px";
		});
		option.addEventListener("click", function(){
			if(index == 0) {
				location.href = "../login/index.jsp";
			} else {
				location.href = "../signup/index.jsp";
			}
		});
    });
</script>
</html>