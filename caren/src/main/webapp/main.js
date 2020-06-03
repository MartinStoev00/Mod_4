import {header, headerStyle} from "./scripts/header.js";
import main from "./scripts/mainPage.js";
import mainPosts from "./scripts/mainPosts.js";
import sidebar from "./scripts/sidebar.js";

function init() {
    let posts;
    let associations;

    getrecords("http://localhost:8080/caren/rest/getrecords").then((data) => {
        posts = JSON.parse(data);
        if(document.getElementsByClassName("mainPosts").length > 0) {   
            mainPosts(posts);
        }
    }).catch((err) => {
        console.log(err);
    });

    getrecords("http://localhost:8080/caren/rest/getassociations").then((data) => {
        associations = JSON.parse(data);
        if(document.getElementsByClassName("main").length > 0) {   
            main(associations);
        }
        if(document.getElementsByClassName("sidebar").length > 0) {   
            sidebar(associations);
        }
        if(document.getElementsByClassName("header").length > 0) {   
            header(associations);
            headerStyle();
        }
    }).catch((err) => {
        console.log(err);
    });
}

function stylize() {
    if(document.getElementsByClassName("header").length > 0) {   
        headerStyle();
    }
}

window.addEventListener('resize', stylize);
window.onload = init;

function getrecords(location) {
    return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", location, true); 
    xhr.onload = function(){
        if(this.status >= 200 && this.status < 300){
            resolve(xhr.response);
            console.log(xhr.responseText);
        } else {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }
    };
    xhr.onerror = function() {
        reject({
            status: this.status,
            statusText: xhr.statusText
        });
    };
    xhr.send();
  });
}