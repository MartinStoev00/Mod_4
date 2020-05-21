let inputs = document.getElementsByClassName("input__text");
let labels = document.getElementsByClassName("input__label");
let exclamation = `<i class="fa fa-exclamation-triangle exclamation"></i>`;
window.addEventListener('resize', init);
window.onload = init;
let incoming = {
    items:[
    {
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
let postsJson = {
    posts: [
        {
            name: "John Doe1",
            date: "2011-11-11",
            img: "1.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus of    ficiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
            comments: [
                {
                    name: "Joe Marunga1",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },{
                    name: "Joe Marunga1",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },{
                    name: "Joe Marunga1",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },{
                    name: "Joe Marunga2",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },{
                    name: "Joe Marunga3",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },{
                    name: "Joe Marunga4",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },
                {
                    name: "Joe Marunga5",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },
                {
                    name: "Joe Marunga6",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                }
            ]
        }, {
            name: "John Doe2",
            date: "2011-11-11",
            img: "1.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus of    ficiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
            comments: [
                {
                    name: "Joe Marunga",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },
                {
                    name: "Joe Marunga",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },{
                    name: "Joe Marunga",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },{
                    name: "Joe Marunga",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },{
                    name: "Joe Marunga",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                },
                {
                    name: "Joe Marunga",
                    img: "1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                    date:"2011-11-11"
                }
            ]
        }
    ]
}
function init() {
    if(inputs.length > 0) {
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
    } else {
        let notifyIconY;
        let notificationsDisplayed = false;
        let header = document.getElementsByClassName("header")[0];
        let noNotifications = `<div class="notifications__none">None</div>`;
        let icons = header.getElementsByClassName("fas");
        let dropdown = header.getElementsByClassName("dropdown")[0];
        let searchIcon = header.getElementsByClassName("form__btn")[0];
        let searchInput  = header.getElementsByClassName("form__search")[0];
        let notifyIcon = header.getElementsByClassName("header__notify")[0];
        let notifications = header.getElementsByClassName("notifications")[0];
        let tri = header.getElementsByClassName("notifications__triangle")[0];
        let notifyNumber = header.getElementsByClassName("notifications__number")[0];
        let main = document.getElementsByClassName("main")[0];
        let mainPosts = document.getElementsByClassName("mainPosts")[0];
        let headerH = header.getBoundingClientRect().height;
        let sidebar = document.getElementsByClassName("sidebar")[0];
        if(document.getElementsByClassName("header").length > 0) {
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
            let xInput   =  searchInput.getBoundingClientRect().left + 6;
            let inputWHeight =  searchInput.getBoundingClientRect().height;
            let notifyIconX = notifyIcon.getBoundingClientRect().left - 70;
            let inputWidth =  searchInput.getBoundingClientRect().width - 1;
            let yInput = searchInput.getBoundingClientRect().top + 3.5;
            notifyIconY = notifyIcon.getBoundingClientRect().top + 50;
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
            fillNotifications();
            fillTable("");
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
        if(document.getElementsByClassName("main").length > 0) {
            function fillMain() {
                function ran(input) {
                    let num = Math.ceil(Math.random()*(input - 1));
                    return "folder/" + num + ".jpg";
                }
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
                } else if(document.title == "Posts") {

                }
            }
            main.style.marginTop = headerH + "px";
            main.style.paddingBottom = headerH + "px";
            fillMain();
        }
        if(document.getElementsByClassName("mainPosts").length > 0) {
            function fillPosts() {
                function display() {
                    let postsMain = mainPosts.getElementsByClassName("posts")[0];
                    postsMain.innerHTML = ``;
                    postsJson.posts.forEach((post) => {
                        let commentsText = ``;
                        post.comments.forEach((comment, index) => {
                            if(index < 2) {
                                let {name, date, img, text} = comment;  
                                commentsText += 
                                    `<div class="comment">
                                        <div class="comment__pic" style="background-image: url(${img});"></div>
                                        <div class="comment__wrapper">
                                            <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;">${name}</span>${text}</div>
                                            <div class="comment__date">${date}</div>
                                        </div>
                                    </div>`
                            }
                        });
                        let numOfComments = post.comments.length > 3 ? ` 
                            <div class="comments__info">
                                <div class="comments__viewall">View All Comments</div>
                                <div class="comments__count">2 out of ${post.comments.length}</div>
                            </div>` : ``;
                        let {name, date, img, text} = post; 
                        postsMain.innerHTML += 
                            `<div class="post">
                                <div class="post__header">
                                    <div class="post__pic" style="background-image: url(${img});"></div>
                                    <div class="post__info">
                                        <div class="post__uploader">${name}</div>
                                        <div class="post__date">${date}</div>
                                    </div>
                                </div>
                                <div class="post__text">${text}</div>
                                <div class="comments">
                                    ${numOfComments}
                                    <div class="comments__section">
                                        ${commentsText}
                                    </div>
                                    <div class="comments__urs">
                                        <div class="comments__urs-pic" style="background-image: url(1.jpg);"></div>
                                        <input class="comments__urs-input"type="text" placeholder="Write your comment">
                                    </div>
                                </div>
                            </div>`
                    });
                }
                display();
                let postsBlocks = document.getElementsByClassName("post");
                Array.prototype.forEach.call(postsBlocks, (block,i) => {
                    let viewall = block.getElementsByClassName("comments__viewall")[0];
                    let dp = false;
                    viewall.addEventListener("click", () => {
                        let info = block.getElementsByClassName("comments__info")[0];
                        let section = block.getElementsByClassName("comments__section")[0];
                        let count = info.getElementsByClassName("comments__count")[0];
                        let commentsText = ``;
                        section.innerHTML = ``;
                        if(!dp) {
                            viewall.innerHTML = `Collapse Menu`;
                            count.innerHTML = `${postsJson.posts[i].comments.length} out of ${postsJson.posts[i].comments.length}`;
                            postsJson.posts[i].comments.forEach((comment) => {
                                let {name, date, img, text} = comment;  
                                commentsText += 
                                    `<div class="comment">
                                        <div class="comment__pic" style="background-image: url(${img});"></div>
                                        <div class="comment__wrapper">
                                            <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;">${name}</span>${text}</div>
                                            <div class="comment__date">${date}</div>
                                        </div>
                                    </div>`;
                            });
                            section.innerHTML = commentsText;
                            dp = true;
                        } else {
                            viewall.innerHTML = `View All Comments`;
                            count.innerHTML = `2 out of ${postsJson.posts[i].comments.length}`;
                            postsJson.posts[i].comments.forEach((comment, num) => {
                                if(num < 2) {
                                    let {name, date, img, text} = comment;  
                                    commentsText += 
                                        `<div class="comment">
                                            <div class="comment__pic" style="background-image: url(${img});"></div>
                                            <div class="comment__wrapper">
                                                <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;">${name}</span>${text}</div>
                                                <div class="comment__date">${date}</div>
                                            </div>
                                        </div>`;
                                }
                            });
                            section.innerHTML = commentsText;
                            dp = false;
                        }
                    })
                })
            }
            mainPosts.style.marginTop = headerH + "px";
            fillPosts();
            let posts = document.getElementsByClassName("post");
            let readMore = `<span class="ReadMore">...<span  style="color: rgb(66, 133, 244);cursor:pointer;"> Read More</span></span>`;
            Array.prototype.forEach.call(posts, (post) => { 
                if(post.getElementsByClassName("post__text").length > 0) {
                    let postText = post.getElementsByClassName("post__text")[0];
                    let text = postText.innerHTML;
                    let charLimit = 400;
                    let firstHalf = text.substring(0, charLimit);
                    let secondHalf = `<span class="more" style="display:none;">${text.substring(charLimit, text.length)}</span>`;
                    let returnedText = firstHalf + secondHalf + readMore;
                    postText.innerHTML = returnedText;
                }
                if(post.getElementsByClassName("ReadMore").length > 0) {
                    let dpied = false;
                    let click = post.getElementsByClassName("ReadMore")[0];
                    click.addEventListener("click",() => {
                        let more = post.getElementsByClassName("more")[0];
                        if(!dpied) {
                            more.style.display = "inline";
                            dpied = true;
                            post.getElementsByClassName("ReadMore")[0].innerHTML = `<span style="color: rgb(66, 133, 244);cursor:pointer;"> Read Less</span>`;
                        } else {
                            post.getElementsByClassName("ReadMore")[0].innerHTML = `...<span style="color: rgb(66, 133, 244);cursor:pointer;"> Read More</span>`;
                            more.style.display = "none";
                            dpied = false;
                        }
                    })
                }
            })
        }
        if(document.getElementsByClassName("sidebar").length > 0) {
            function fillPeople() {
                let people = document.getElementsByClassName("people")[0];
                incoming.items.forEach((item) => {
                    let {name, img} = item;
                    people.innerHTML += 
                        `<a href="${img}" class="people__container">
                            <div class="people__pic" style="background-image: url(${img});"></div>
                            <div class="people__name">${name}</div>
                        </a>`
                });
            }
            let currentpage;
            sidebar.style.top = headerH + "px";
            let sbc = document.getElementsByClassName("sidebar__content")[0];
            let t = sbc.getBoundingClientRect().top + sbc.getBoundingClientRect().height;
            document.getElementsByClassName("people")[0].style.top = "calc(5vh + " + t + "px)";
            let linkForPages = document.getElementsByClassName("sidebar__link");
            Array.prototype.forEach.call(linkForPages, (link, index) => {
                let linkL = link.getAttribute("data-link");
                function on() {
                    currentpage = linkL;
                    link.style.backgroundColor = "rgba(66, 133, 244, 0.1)";
                    link.style.color = "rgb(66, 133, 244)";
                }
                function off(linkAll) {
                    linkAll.style.backgroundColor = "#fff";
                    linkAll.style.color = "#444";
                }
                if(index == 0) {
                    on();
                }
                link.addEventListener("click", () => {
                    Array.prototype.forEach.call(linkForPages, (linkAll) => off(linkAll));
                    on();
                    console.log(linkL);
                });
                link.addEventListener("mouseover", () => {
                    if(currentpage !== linkL) {
                        link.style.backgroundColor = "#f5f5f5";
                    }
                });
                link.addEventListener("mouseout", () => {
                    if(currentpage !== linkL) {
                        off(link);
                    }
                })
            });
            fillPeople();
        }
    }
   
}


