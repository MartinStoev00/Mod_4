let notificationsDisplayed = false;
let headerBlock = document.getElementsByClassName("header")[0];
let noNotifications = `<div class="notifications__none">None</div>`;
let icons = headerBlock.getElementsByClassName("fas");
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

export function headerStyle() {
    let notifyIconX = notifyIcon.getBoundingClientRect().left - 70;
    let notifyIconY = notifyIcon.getBoundingClientRect().top + 50;
    tri.style.top = (notifyIconY - 7.5) + "px";
    tri.style.left = (notifyIconX + 84) + "px";
    notifyNumber.style.display = "block";
    notifyNumber.style.top = (notifyIconY - 41) + "px";
    notifyNumber.style.left = (notifyIconX + 92) + "px";
    notifications.style.top = (notifyIconY) + "px";
    notifications.style.left = (notifyIconX - 240) + "px";
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
