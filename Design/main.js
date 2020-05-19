let notifyIconY;
let notificationsDisplayed = false;
let icons = document.getElementsByClassName("fas");
let inputs = document.getElementsByClassName("input__text");
let labels = document.getElementsByClassName("input__label");
let noNotifications = `<div class="notifications__none">None</div>`;
let exclamation = `<i class="fa fa-exclamation-triangle exclamation"></i>`;
let main = document.getElementsByClassName("main")[0];
let header = document.getElementsByClassName("header")[0];
let dropdown = document.getElementsByClassName("dropdown")[0];
let searchIcon = document.getElementsByClassName("form__btn")[0];
let searchInput  = document.getElementsByClassName("form__search")[0];
let notifyIcon = document.getElementsByClassName("header__notify")[0];
let notifications = document.getElementsByClassName("notifications")[0];
let tri = document.getElementsByClassName("notifications__triangle")[0];
let notifyNumber = document.getElementsByClassName("notifications__number")[0];
window.addEventListener('resize', init);
window.onload = init;
let incoming = {
    items:[{
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Monica",
        description: "None",
        img: "2.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Omar",
        description: "None",
        img: "5.jpg" 
    },
    {
        name: "Omar",
        description: "None",
        img: "5.jpg" 
    },
    {
        name: "Omar",
        description: "None",
        img: "5.jpg" 
    },
    {
        name: "Omar",
        description: "None",
        img: "5.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    }],
    notifications: [
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
    ]
};
function init() {
    if(inputs.length > 0) {
        Array.prototype.forEach.call(inputs, (input, index) => {
            let label = labels[index];
            let offSet = Math.ceil(window.pageYOffset + input.getBoundingClientRect().top) + 7;
            label.style.top = offSet + "px";
            let leftOffSet = Math.ceil(input.getBoundingClientRect().left) + 5;
            label.style.left = leftOffSet + "px";
            input.addEventListener("focus", () => {
                label.style.fontSize = "10px";
                label.style.backgroundColor = "#ffffff";
                label.style.top = (offSet - 14) + "px";
                label.style.zIndex = "1";
            });
            input.addEventListener("blur", () => {
                if (input.value == "" && input.style.backgroundColor !== "rgb(249, 252, 184)") {
                    label.style.fontSize = "16px";
                    label.style.backgroundColor = "transperent";
                    label.style.top = offSet + "px";
                    label.style.zIndex = "-1";
                }
            });
        });
        inputs[0].focus();
    } 
    if(document.getElementsByClassName("header").length > 0) {
        let headerH = header.getBoundingClientRect().height;
        let xInput   =  searchInput.getBoundingClientRect().left + 6;
        let inputWHeight =  searchInput.getBoundingClientRect().height;
        let notifyIconX = notifyIcon.getBoundingClientRect().left - 70;
        let inputWidth =  searchInput.getBoundingClientRect().width - 1;
        let yInput = searchInput.getBoundingClientRect().top + 3.5;
        notifyIconY = notifyIcon.getBoundingClientRect().top + 50;
        main.style.marginTop = headerH + "px";
        main.style.paddingBottom = headerH + "px";
        tri.style.top = (notifyIconY - 7.5) + "px";
        tri.style.left = (notifyIconX + 84) + "px";
        notifyNumber.style.top = (notifyIconY - 41) + "px";
        notifyNumber.style.left = (notifyIconX + 92) + "px";
        notifications.style.top = (notifyIconY) + "px";
        notifications.style.left = (notifyIconX - 240) + "px";
        dropdown.style.top = (yInput - 3.5 + inputWHeight) + "px";
        searchIcon.style.top = yInput + "px";
        searchIcon.style.left  = xInput + "px";
        dropdown.style.width = inputWidth + "px";
        dropdown.style.left= (xInput - 6) + "px";
        fillNotifications();
        fillTable("");
        headerInit();
        fillMain();
    }
}
function headerInit() {
    notifyIcon.addEventListener("click", () => {
        notifyNumber.style.top = (notifyIconY - 34) + "px";
        setTimeout(() => {
        notifyNumber.style.top = (notifyIconY - 41) + "px";
            if(notificationsDisplayed) {
                fillNotifications();
                notificationsDisplayed = false;
                tri.style.display = "none";
                notifications.style.display = "none";
            } else {
                notificationsDisplayed = true;
                tri.style.display = "block";
                notifications.style.display = "block";
            }
        }, 200);
    });
    notifyIcon.addEventListener("blur", () => {
        setTimeout(() => {
            if(document.activeElement.className !=="notifications__item") {
                notificationsDisplayed = false;
                notifications.style.display = "none";
                tri.style.display = "none";
            }
        }, 10)
    });
    Array.prototype.forEach.call(icons, (icon) => {
        icon.addEventListener("click", () => {
            icon.style.marginBottom = "-7px";
            setTimeout(() => {
                icon.style.marginBottom = "0px";
            }, 200);
        });
    });
    searchInput.addEventListener("focus", () => {
        searchInput.style.backgroundColor = "#fff";
        searchInput.style.border = ".5px solid #ddd";
        searchInput.style.borderRadius = "8px 8px 0px 0px";
        dropdown.style.display = "block";
        fillTable(searchInput.value.toLowerCase());
    });
    searchInput.addEventListener("blur", () => {
        setTimeout(() => {
            if(document.activeElement.className !=="dropdown__item") {
                searchInput.style.backgroundColor = "rgb(241, 242, 243)";
                searchInput.style.border = ".5px solid #fff";
                searchInput.style.borderRadius = "8px";
                dropdown.style.display = "none";
            }
        }, 10);
    });
    searchInput.addEventListener("keyup", (e) => {
        fillTable(searchInput.value.toLowerCase());
    });
}
function fillNotifications() {
    notifications.innerHTML = "";
    let newArr = incoming.notifications;
    if(newArr.length == 0) {
        notifications.innerHTML = noNotifications;
    }
    newArr.forEach((notification) => {
        let {name, deed, link, img, date} = notification;
        notifications.innerHTML +=
        `<a class="notifications__item" href="${img}" data-index-number="${name}">
            <div style="background-image: url(${img});" class="notifications__img"></div>
            <div class="notifications__container">
                <p class="notifications__text">${name} ${deed}</p>
                <p class="notifications__date">${date}</p>
            </div>
        </a>`;
    });
    notifyNumber.innerHTML = incoming.notifications.length !== 0 ? incoming.notifications.length : "";
    let items = document.getElementsByClassName("notifications__item");
    Array.prototype.forEach.call(items, (item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            remove(item.dataset.indexNumber);
            if(document.getElementsByClassName("notifications__item").length == 0) {
                notificationsDisplayed = false;
                notifications.style.display = "none";
                tri.style.display = "none";
                notifications.innerHTML = noNotifications;
            }
            notifyNumber.innerHTML = incoming.notifications.length !== 0 ? incoming.notifications.length : "";
            location.href = item.href;
        });
    });
}
function remove(index) {
    let notifications = incoming.notifications;
    let items = document.getElementsByClassName("notifications__item");
    let i = -1;
    notifications.forEach((notif, ind) => {
        if(notif.name === index && i < 0) {
            i = ind;
        }
    });
    if( i >= 0) {
        let removed = notifications.splice(0, i + 1);
        removed.pop();
        let newArr = [...removed,...notifications];
        items[i].remove();
        incoming.notifications = newArr;
    }
}
function fillTable(input) {
    let output = ``;
    let newArr = incoming.items.filter((item) => {
        if(input == "") {
            return true;
        } else {
            return item.name.toLowerCase().includes(input) || input.includes(item.name.toLowerCase());
        }
    }).slice(0, 5);
    if(newArr.length == 0) {
        output = `<div class="dropdown__item" style="color: #555">No results found</div>`;
    } else {
        newArr.forEach((item) => {
            let {name, description, img} = item;
            output +=
            `<a class="dropdown__item" href="${img}">
                <div style="background-image: url(${img});" class="dropdown__img"></div>
                <div class="dropdown__container">
                    <p class="dropdown__name">${name}</p>
                    <p class="dropdown__description">${description}</p>
                </div>
            </a>`;
        });
    }
    dropdown.innerHTML = output;
}
function fillMain() {
    if(document.title == "Main") {
        incoming.items.forEach((item) => {
        let {name, description, img} = item;
        main.innerHTML += 
            `<a href="${img}" class="main__card">
                <div class="main__container">
                    <div style="background-image: url(${ran(23)});" class="main__img"></div>
                    <div style="background-image: url(${img});" class="main__profile"></div>
                    <div class="main__text">
                        <p class="main__name">${name}</p>
                    </div>
                </div>
            </a>`
        });
    }
}
function ran(input) {
    let num = Math.ceil(Math.random()*(input - 1));
    return "folder/" + num + ".jpg";
}
function shake(input, label) {
    let offSet = Math.ceil(window.pageYOffset + input.getBoundingClientRect().top) + 6;
    label.style.fontSize = "10px";
    label.style.backgroundColor = "#ffffff";
    label.style.top = (offSet - 14) + "px";
    label.style.zIndex = "1";
    input.value = "";
    input.style.border = "1px solid red";
    input.style.backgroundColor = "rgb(249,252,184)";
    input.style.animation = "shake 0.82s both";
    label.style.animation = "shake 0.82s both";
    setTimeout(function() {
        input.style.animation = "none";
        label.style.animation = "none";
    }, 830);
    input.value = "";
}
function errLogin() {
    let name;
    let password;
    if(inputs[0].value == "") {
    	inputs[0].focus();
    	shake(inputs[0], labels[0]);
    }
    name = inputs[0].value;
    if(inputs[1].value == "") {
    	inputs[1].focus();
    	shake(inputs[1], labels[1]);
    }
    password = inputs[1].value;
    if(name !== "" && password !== "") {
    	if (false) {
    		location.href = "www.yoursite.com";
    	} else {
	    	inputs[0].focus();
	    	shake(inputs[0], labels[0]);
	    	shake(inputs[1], labels[1]);
    	}
    }
}
function errSignup() {  
    let name;
    let password;
    let repeat;
    if(inputs[0].value == "") {
        inputs[0].focus();
        shake(inputs[0], labels[0]);
    }
    name = inputs[0].value;
    if(inputs[1].value == "") {
        inputs[1].focus();
        shake(inputs[1], labels[1]);
    }
    password = inputs[1].value;
    if(inputs[2].value == "") {
        inputs[2].focus();
        shake(inputs[2], labels[2]);
    }
    repeat = inputs[2].value;
    if(name !== "" && password !== "" && repeat !== "") {
        if(password == repeat) {
            if (false) {
                location.href = "www.yoursite.com";
            } else {
                inputs[0].focus();
                shake(inputs[0], labels[0]);
                shake(inputs[1], labels[1]);
                shake(inputs[2], labels[2]);
            }
        } else {
            inputs[1].focus();
            shake(inputs[1], labels[1]);
            shake(inputs[2], labels[2]);
        }
    }
}