import {header, headerStyle} from "./scripts/header.js";
import {sidebar} from "./scripts/sidebar.js";
import {statistics} from "./scripts/statistics.js";

function init() {
    window.scrollTo(0,0);
    onloadedSettings();
    let posts;
    let associations;
    let comments;
    getrecords("http://localhost:8080/caren/rest/getassociations").then((data) => {
        associations = JSON.parse(data);
        getrecords("http://localhost:8080/caren/rest/getrecords/0").then((data) => {
            posts = JSON.parse(data);
            getrecords("http://localhost:8080/caren/rest/getcomments/0").then((data) => {
                comments = JSON.parse(data);
                if(document.getElementsByClassName("sidebar").length > 0) { 
                	if (posts != "[]"){
                		let all = document.getElementsByClassName("all")[0];
                		let loaderBody = document.getElementsByClassName("loaderBody")[0];
                		loaderBody.style.display="none";
                		all.style.display = "grid";
                		all.style.pointerEvents = "auto";
                	    window.scrollTo(0,0);
                		sidebar(associations, posts, comments);
                        header(comments);
                        stylize();
                        statistics(posts);
                	}
                }
                
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
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

export default function getrecords(location) {
    return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", location, true); 
    xhr.onload = function(){
        if(this.status >= 200 && this.status < 300){
            resolve(xhr.response);
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

function putcomment(location, content) {
    return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", location, true); 
    xhr.onload = function(){
        if(this.status >= 200 && this.status < 300){
            resolve(xhr.response);
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
    xhr.setRequestHeader('Content-Type', 'application/json'); 
    xhr.send(JSON.stringify(content));
  });
}

export function usePutComment(input, content) {
    putcomment("http://localhost:8080/caren/rest/comment/"+input, content).catch((err) => {
        console.log(err);
    });
}