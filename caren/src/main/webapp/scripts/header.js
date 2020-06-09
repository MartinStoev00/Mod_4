let notificationsDisplayed = false;
let headerBlock = document.getElementsByClassName("header")[0];
let noNotifications = `<div class="notifications__none">None</div>`;
let icons = headerBlock.getElementsByClassName("fas");
let dropdown = headerBlock.getElementsByClassName("dropdown")[0];
let searchIcon = headerBlock.getElementsByClassName("form__btn")[0];
let searchInput  = headerBlock.getElementsByClassName("form__search")[0];
let notifyIcon = headerBlock.getElementsByClassName("header__notify")[0];
let notifyIconY = notifyIcon.getBoundingClientRect().top + 50;
let notifications = headerBlock.getElementsByClassName("notifications")[0];
let tri = headerBlock.getElementsByClassName("notifications__triangle")[0];
let notifyNumber = headerBlock.getElementsByClassName("notifications__number")[0];
let main = document.getElementsByClassName("main")[0];
let mainPosts = document.getElementsByClassName("mainPosts")[0];
let headerH = headerBlock.getBoundingClientRect().height;
let sidebar = document.getElementsByClassName("sidebar")[0];
let notificationsReceived, itemsReceived;

export function header(inputItems, inputNotifications) {
    itemsReceived = inputItems;
    notificationsReceived = inputNotifications;
    fillNotifications();
    fillTable("");
}

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

export function headerStyle() {
    let xInput   =  searchInput.getBoundingClientRect().left + 6;
    let inputWHeight =  searchInput.getBoundingClientRect().height;
    let notifyIconX = notifyIcon.getBoundingClientRect().left - 70;
    let inputWidth =  searchInput.getBoundingClientRect().width - 1;
    let yInput = searchInput.getBoundingClientRect().top + 3.5;
    let notifyIconY = notifyIcon.getBoundingClientRect().top + 50;
    dropdown.style.width = inputWidth + "px";
    dropdown.style.left= (xInput - 6) + "px";
    dropdown.style.top = (yInput - 3.5 + inputWHeight) + "px";
    tri.style.top = (notifyIconY - 7.5) + "px";
    tri.style.left = (notifyIconX + 84) + "px";
    notifyNumber.style.top = (notifyIconY - 41) + "px";
    notifyNumber.style.left = (notifyIconX + 92) + "px";
    notifications.style.top = (notifyIconY) + "px";
    notifications.style.left = (notifyIconX - 240) + "px";
    searchIcon.style.top = yInput + "px";
    searchIcon.style.left  = xInput + "px";
}

function remove(index) {
    let notifications = notificationsReceived;
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
        notificationsReceived = newArr;
    }
}
function fillNotifications() {
    notifications.innerHTML = "";
    let newArr = notificationsReceived;
    if(newArr.length == 0) {
        notifications.innerHTML = noNotifications;
    }

    newArr.forEach((notification) => {
        let {name, deed, link, img, date} = notification;
        notifications.innerHTML +=
            `<a class="notifications__item" href="${img}" data-index-number="${name}">
                <div style="background-image: url(../Pictures/profile_pics/${img});" class="notifications__img"></div>
                <div class="notifications__container">
                    <p class="notifications__text">${name} ${deed}</p>
                    <p class="notifications__date">${date}</p>
                </div>
            </a>`;
    });

    notifyNumber.innerHTML = notificationsReceived.length !== 0 ? notificationsReceived.length : "";
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
            notifyNumber.innerHTML = notificationsReceived.length !== 0 ? notificationsReceived.length : "";
            location.href = item.href;
        });
    });
}
function fillTable(input) {
    let output = ``;
    let newArr = itemsReceived.filter((item) => {
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
                <div style="background-image: url(../Pictures/profile_pics/${(Math.ceil(Math.random()*(4))) + ".jpg"});" class="dropdown__img"></div>
                <div class="dropdown__container">
                    <p class="dropdown__name">${name}</p>
                    <p class="dropdown__description">${description}</p>
                </div>
            </a>`;
        });
    }
    dropdown.innerHTML = output;
}