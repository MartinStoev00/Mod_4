<!DOCTYPE html>
<html>
    <link rel="stylesheet" href="settings.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../fontawesome-free-5.13.0-web/css/all.min.css">

    <title>
        Settings
    </title>

    <body>
		<%
			if (session.getAttribute("aid") == null) {
				response.sendRedirect("../login/");
			}
		%>
		
		<div class="header" name="header">
			<div class="header__wrapper"><img class="header__logo" src="../Pictures/website_icon.png" alt=""></div>
			<div class="header__buttons">
				<button class="header__myProfile fas fa-user-circle" onclick="location.href='../posts/'"></button>
				<button class="header__notify fas fa-bell"></button>
				<button class="header__home fas fa-cog" onclick="location.href='../settings/'"></button>
				<form action="../signout">
					<button type="submit" class="header__logout fas fa-sign-out-alt"></button>
				</form>
				<div class="notifications"></div>
				<div class="notifications__triangle"></div>
				<p class="notifications__number"></p>
				<div class="arrow"></div>
			</div>
		</div>

        <div class="title_content">
            <header class="root_header" style="margin-top: 150px; margin-bottom: 25px;">
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
        
    </body>

    <script src="settings.js"></script> 
</html>