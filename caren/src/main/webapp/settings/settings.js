let first_name = document.getElementById("first_name_input");
let last_name = document.getElementById("last_name_input");
let email = document.getElementById("email_input");
let password = document.getElementById("password_input");
let old_password = document.getElementById("old_password_input");

let dark_mode = document.getElementById("dark_mode_input");
let RPL = document.getElementById("RPL_input");


window.onload = function (){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200) {
            let profileSettings = JSON.parse(this.responseText);
            displayPlaceHolders(profileSettings);
        }
    }
    request.open("GET", "http://localhost:8080/caren/rest/getprofilesettings", true);
    request.send();
}


function displayPlaceHolders(profileSettings){
    first_name.placeholder = profileSettings.first_name;
    last_name.placeholder = profileSettings.last_name;
    email.placeholder = profileSettings.email;

    if (profileSettings.dark_mode == 1) {
        dark_mode.checked = true;
    } else {
        dark_mode.checked = false;
    }
    RPL.value = profileSettings.rpl;
}