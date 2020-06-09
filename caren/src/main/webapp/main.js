import {header, headerStyle} from "./scripts/header.js";
import main from "./scripts/mainPage.js";
import sidebar from "./scripts/sidebar.js";

let notifications = [
    {
        name: "Joenvkgkjhgkjhggjfgj",
        deed: " has commented on your post",
        img: "1.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Grozen",
        deed: " has commented on your post",
        img: "2.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "James",
        deed: " has commented on your post",
        img: "3.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Jar",
        deed: " has commented on your post",
        img: "4.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Justice",
        deed: " has commented on your post",
        img: "5.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "John",
        deed: " has commented on your post",
        img: "2.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "James",
        deed: " has commented on your post",
        img: "3.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Jar",
        deed: " has commented on your post",
        img: "4.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Justice",
        deed: " has commented on your post",
        img: "5.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "John",
        deed: " has commented on your post",
        img: "2.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "James",
        deed: " has commented on your post",
        img: "3.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Jar",
        deed: " has commented on your post",
        img: "4.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Justice",
        deed: " has commented on your post",
        img: "5.jpg",
        link: "somewhere",
        date: "Yesterday"
    }
];



function init() {
    let posts;
    let associations;

    getrecords("http://localhost:8080/caren/rest/getrecords/0").then((data) => {
        posts = JSON.parse(data);
        if(document.getElementsByClassName("sidebar").length > 0) {   
            sidebar(associations, posts);
        }
    }).catch((err) => {
        console.log(err);
    });

    getrecords("http://localhost:8080/caren/rest/getassociations").then((data) => {
        associations = JSON.parse(data);
        if(document.getElementsByClassName("main").length > 0) {   
            main(associations);
        }
        
        if(document.getElementsByClassName("header").length > 0) {   
            header(associations, notifications);
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