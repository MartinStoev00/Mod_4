<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Posts</title>
	<link rel="stylesheet" href="settings.css">
	<link rel="stylesheet" href="../css/main.css">
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel="stylesheet" href="../fontawesome-free-5.13.0-web/css/all.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
</head>
<body>

	<%
		if (session.getAttribute("aid") == null) {
			response.sendRedirect("http://localhost:8080/caren/login/");
		}
	%>
	<div class="loaderBody">
		<div class="loader">
			<div class="circle"></div>
			<div class="circle"></div>
	    </div>
	</div>
	<div class="all">
		<div class="header" name="header">
			<div class="header__wrapper"><img class="header__logo" src="../Pictures/website_icon.png" alt=""></div>
			<div class="header__buttons">
				<button class="header__myProfile fas fa-user-circle" onclick="location.href='http://localhost:8080/caren/posts/'"></button>
				<button class="header__notify fas fa-bell"></button>
				<button id="chartsToggle" class="header__chart fas fa-chart-area" data-set="off"></button>
				<button id="settingsToggle" class="header__settings fas fa-cog" data-set="off"></button>
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
				<li class="sidebar__link" data-state="selected" data-link="text"><span><i class="far fa-copy"></i>Text</span><i class="fas fa-check"></i></li>
				<li class="sidebar__link" data-state="selected" data-link="height"><span><i class="fas fa-ruler"></i>Height</span><i class="fas fa-check"></i></li>
				<li class="sidebar__link" data-state="selected" data-link="weight"><span><i class="fas fa-weight"></i>Weight</span><i class="fas fa-check"></i></li>
				<li class="sidebar__link" data-state="selected" data-link="blood_pressure"><span><i class="fas fa-tint"></i>Blood Pressure</span><i class="fas fa-check"></i></li>
				<li class="sidebar__link" data-state="selected" data-link="other"><span><i class="fas fa-chart-bar"></i>Other</span><i class="fas fa-check"></i></li>
			</ul>
			<div class="sidebar__nav">
				<button class="sidebar__control" data-state="selected">Filter</button>
				<button class="sidebar__control" data-state="deselected">People</button>
			</div>
			<div class="filters">
				<input class="filters__search" type="text" placeholder="Search Term">
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
			<div class="people__search">
				<input type="text" class="people__searchBar" placeholder="Find a person">
			</div>
			<div class="people"></div>
		</div>
		<div class="mainPosts">
			<div id="settings" class="settings" style="display: none;">
	        	<div class="title_content">
		            <header class="root_header" style="margin-top: 150px; margin-bottom: 25px; display: none;">
		                Settings
		                
		            </header>
		        </div>
		
		        <div class="panel">
		            <div class="settings_card">
		                <div class="card_title_wrapper">
		                    <header class="card_header">
		                        Account
		                        <span id="welcome" style="float: right; margin-right: 5%; text-align: center; font-size: 20px;">Welcome: Loading...</span>
		                        <hr style="width: 35%; margin-top: 5px; margin-left: 0;">
		                    </header>
		                </div>
		                 
		                <form action="changesettings">
		                    <div class="settings_wrapper" style="height: 300px;">
		
		                        <div class="setting_field">
		                            <div class="setting_label">
		                                First Name:
		                            </div>
		                            <input name="first_name" class="setting_text_input" id="first_name_input" type="text" placeholder="Loading..." style="background-image: url('icons/user.png'); background-position: 7px 2px; background-repeat: no-repeat; background-size: 6%;">
		                        </div>
		    
		                        <div class="setting_field">
		                            <div class="setting_label">
		                                Last Name:
		                            </div>
		                            <input name="last_name" class="setting_text_input" id="last_name_input" type="text" placeholder="Loading..." style="background-image: url('icons/user.png'); background-position: 7px 2px; background-repeat: no-repeat; background-size: 6%;">
		                        </div>
		    
		                        <div class="setting_field">
		                            <div class="setting_label">
		                                E-mail:
		                            </div>
		                            <input name="email" class="setting_text_input" id="email_input" type="text" placeholder="Loading..." style="background-image: url('icons/mail.png'); background-position: 5px 0px; background-repeat: no-repeat; background-size: 7%;">
		                        </div>
		                        <!-- <hr style="margin-top: 30px; width: 50%;">-->
		                        <div class="setting_field">
		                            <div class="setting_label">
		                                New Password:
		                            </div>
		                            <input name="password" class="setting_text_input"  id="password_input" type="password" placeholder="********" style="background-image: url('icons/lock.png'); background-position: 7px 2px; background-repeat: no-repeat; background-size: 6%;"">
		                        </div>
		
		                        <div class="setting_field">
		                            <div class="setting_label">
		                                Old Password*:
		                            </div>
		                            <input name="old_password" class="setting_text_input"  id="old_password_input" type="password" placeholder="********" style="background-image: url('icons/lock.png'); background-position: 7px 2px; background-repeat: no-repeat; background-size: 6%;"">
		                        </div>
		
		                        <div class="settings_note" style="margin-top: 50px;">
		                            <label>Empty fields will remain unchanged.</label>
		                        </div>
		                    </div>
		                   
		                    <div class="card_title_wrapper">
		                        <header class="card_header">
		                            Site
		                            <hr style="width: 35%; margin-top: 5px; margin-left: 0;">
		                        </header>
		                    </div>
		    
		                    <div class="settings_wrapper" style="height: 100px;">
		    
		                        <div class="setting_field">
		                            <div class="setting_label">
		                                Dark Mode:
		                            </div>
		    
		                            <span class="switch">
		                                <i>
		                                    <span class="setting_description">Enables dark mode.</span>
		                                </i>
		                                <input name="dark_mode" class="setting_checkbox_input" id="dark_mode_input" type="checkbox" style="background-image: url('icons/user.png'); background-position: 7px 2px; background-repeat: no-repeat; background-size: 6%;" value="dark_mode">
		                            </span>
		                        </div>
		    
		                        <div class="setting_field">
		                            <div class="setting_label">
		                                Reports Per Line:
		                            </div>
		    
		                            <span class="switch">
		                                <i>
		                                    <span class="setting_description">Adjusts card view.</span>
		                                </i>
		                                <input name="rpl" type="range" id="RPL_input" min="1" max="7" value="4" class="setting_slider_input" id="myRange">
		                            </span>
		                        </div>
		                    </div>
		                    <input class="submit_button" id="save" type="submit" value="Save" style="margin-right: 5%; margin-top: 5%;" disabled>
		                    <div class="settings_error" style="margin-top: 50px;">
		                        <label id="error" style="color: red; float: right; margin-right: 10%; font-family: Trebuchet MS;"></label>
		                    </div>
		                </form>
		
		            </div>
		        </div> 
			</div>
			<div id="charts" class="charts">
				<div class="charts__date">
					<div class="charts__dateBlock">
						<p>From:</p>
						<input type = "date" class = "statistics__date">
					</div>
					<div class="charts__dateBlock">
						<p>To:</p>
						<input type = "date" class = "statistics__date">
					</div>
				</div>
				<div class="statistics">
				 	<canvas id="canvas"></canvas>
				</div>
				<div class="bars">
				 	<canvas id="changescanvas"></canvas>
				</div>
			</div>
			<div id="posts" class="posts"></div>
		</div>
	</div>
</body>
<script src="settings.js"></script>
<script type="module" src="../main.js"></script>
</html>