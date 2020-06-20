let welcome = document.getElementById("welcome");
let first_name = document.getElementById("first_name_input");
let last_name = document.getElementById("last_name_input");
let email = document.getElementById("email_input");
let password = document.getElementById("password_input");
let old_password = document.getElementById("old_password_input");

let dark_mode = document.getElementById("dark_mode_input");
let rpl = document.getElementById("RPL_input");

let dark_mode_default = document.getElementById("dark_mode_input").value;
let rpl_default = document.getElementById("RPL_input").value;

let save = document.getElementById("save");
let error = document.getElementById("error");

let settingsDiv = document.getElementById("settings");
let chartsDiv = document.getElementById("charts");
let postsDiv = document.getElementById("posts");

let settingsButton = document.getElementById("settingsToggle");
let chartsButton = document.getElementById("chartsToggle");

first_name.addEventListener('change', inputChanged)
last_name.addEventListener('change', inputChanged)
email.addEventListener('change', inputChanged)
password.addEventListener('change', inputChanged)
old_password.addEventListener('change', inputChanged)
dark_mode.addEventListener('change', inputChanged)
rpl.addEventListener('change', inputChanged)
settingsButton.addEventListener('click', ToggleSettings)

function onloadedSettings (){
	save.disabled = true;
    save.style.color = "#b3b3b3";
    save.style.border = "1px solid #b3b3b3";
    error.innerHTML = "";
    
    
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/caren/rest/getprofilesettings", true);
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200) {
            let profileSettings = JSON.parse(this.responseText);
            displayPlaceHolders(profileSettings);
            inputChanged();
        }
    }
    request.send();
}

function ToggleSettings(){
	if (settingsButton.getAttribute("data-set") == "off") {
		settingsButton.setAttribute("data-set", "on");
		settingsButton.style.color = "purple";

		if (chartsButton.getAttribute("data-set") == "on") {
			chartsButton.click();
		}
		
		showSettings();
	} else {
		settingsButton.setAttribute("data-set", "off");
		settingsButton.style.color = "#444";
		hideSettings();
	}
}

function showSettings(){
	settings.style.display = "block";
	postsDiv.style.display = "none";
}

function hideSettings(){
	settings.style.display = "none";
	postsDiv.style.display = "flex";
}


function displayPlaceHolders(profileSettings){
    welcome.innerHTML = "Welcome: " + profileSettings.first_name + " " + profileSettings.last_name

    first_name.placeholder = profileSettings.first_name;
    last_name.placeholder = profileSettings.last_name;
    email.placeholder = profileSettings.email;

    if (profileSettings.dark_mode == 1) {
        dark_mode.checked = true;
    } else {
        dark_mode.checked = false;
    }
    dark_mode_default = dark_mode.checked;

    rpl.value = profileSettings.rpl;
    rpl_default = profileSettings.rpl;

   
    
}

function inputChanged(){
    if (first_name.value == "" && last_name.value == "" && email.value == "" && password.value == "" && dark_mode.checked == dark_mode_default && rpl.value == rpl_default) {
        save.disabled = true;
        save.style.color = "#b3b3b3";
        save.style.border = "1px solid #b3b3b3";
        error.innerHTML = "";
    } else if (old_password.value != "") {
        save.disabled = false;
        save.style.color = "#434343";
        save.style.border = "2px solid #434343";
        error.innerHTML = "";
    } else if (first_name.value == "" && last_name.value == "" && email.value == "" && password.value == "" && (dark_mode.checked != dark_mode_default || rpl.value != rpl_default)){
        save.disabled = false;
        save.style.color = "#434343";
        save.style.border = "2px solid #434343";
        error.innerHTML = "";
    } else {
        save.disabled = true;
        save.style.color = "#b3b3b3";
        save.style.border = "1px solid #b3b3b3";
        error.innerHTML = "Fields marked with ( * ) must be filled before saving";
    }
}