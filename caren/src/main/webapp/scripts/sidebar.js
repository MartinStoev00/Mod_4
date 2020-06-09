import mainPosts from "./mainPosts.js";

let headerBlock = document.getElementsByClassName("header")[0];
let sidebarBlock = document.getElementsByClassName("sidebar")[0];
let people = document.getElementsByClassName("people")[0];
let settings = document.getElementsByClassName("filters")[0];
let filterBtn = document.getElementsByClassName("sidebar__control")[0];
let peopleBtn = document.getElementsByClassName("sidebar__control")[1];
let linkForPages = document.getElementsByClassName("sidebar__link");
let headerH = headerBlock.getBoundingClientRect().height;
let filterBtns = document.getElementsByClassName("filters__filter")[0];
let filterBox = document.getElementsByClassName("filters__box")[0];
let iconCurr = filterBtns.getElementsByClassName("fas")[0]; 
let boxBtns = document.getElementsByClassName("box__btn");
let fromDate = document.getElementsByClassName("date__date")[0];
let toDate = document.getElementsByClassName("date__date")[1];
let btnReset = document.getElementsByClassName("filters__reset")[0];
let searchRecords = document.getElementsByClassName("filters__search")[0];
let caret = `<i class="fas fa-caret-down"></i>`;
let chrono = "Oldest to Newest";
let revChrono = "Newest to Oldest";

sidebarBlock.style.top = headerH + "px";
let dp = false;
let filterBoxTop = filterBtns.getBoundingClientRect().top + filterBtns.getBoundingClientRect().height - 1;
filterBox.style.left = filterBtns.getBoundingClientRect().left + "px";
filterBox.style.width = (filterBtns.getBoundingClientRect().width - 2) + "px";
filterBox.style.top =  filterBoxTop + "px";
people.style.height = (filterBtn.getBoundingClientRect().bottom) + "px";
people.style.display = "none";
filterBtn.style.backgroundColor = "#fff";
let initData, data, commetsData;
let startDate, endDate, order = chrono;

export default function sidebar(items, posts, comments) {
    items.forEach((item) => {
        let {name, img} = item;
        people.innerHTML += 
            `<a href="${img}.jpg" class="people__container">
                <div class="people__pic" style="background-image: url(../Pictures/profile_pics/${img}.jpg);"></div>
                <div class="people__name">${name}</div>
            </a>`
    });
    let ordererdDates = posts.map((post) => {
        let {date} = post;
        return date.split(" ")[0];
    }).sort((a, b) => {
        let one = new Date(a);
        let two = new Date(b)
        if(one < two) { return -1; }
        if(one > two) { return 1; }
        return 0;
    });
    commetsData = comments;
    initData = posts;
    data = posts;
    startDate = ordererdDates.shift();
    fromDate.value = startDate;
    endDate = ordererdDates.pop();
    toDate.value = endDate;
    mainWithComments(
        posts.sort((a, b) => {
            let one = new Date(a.date);
            let two = new Date(b.date)
            if(one < two) { return -1; }
            if(one > two) { return 1; }
            return 0;
        }));
    sortingBlocks(posts);
    filteringSearch();
}

function mainWithComments(inputData) {
    mainPosts(inputData, commetsData)
}

Array.prototype.forEach.call(linkForPages, (link, index) => {
    let linkL = link.getAttribute("data-link");
    function on() {
        link.style.backgroundColor = "rgba(66, 133, 244, 0.1)";
        link.style.color = "rgb(66, 133, 244)";
        link.getElementsByClassName("fa-check")[0].style.display = "block";
    }
    function off() {
        link.style.backgroundColor = "#fff";
        link.style.color = "#444";
        link.getElementsByClassName("fa-check")[0].style.display = "none";
    }
    on();
    link.addEventListener("click", () => {
        let postBlockMain = document.getElementsByClassName("post");
        if(link.style.backgroundColor === "rgba(66, 133, 244, 0.1)") {
            off();
            Array.prototype.forEach.call(postBlockMain, (blockPost) => {
                if(blockPost.getAttribute("data-link") == linkL) {
                    blockPost.style.display = "none";
                }
            });
        } else {
            on();
            Array.prototype.forEach.call(postBlockMain, (blockPost) => {
                if(blockPost.getAttribute("data-link") == linkL) {
                    blockPost.style.display = "block";
                }
            });
        }
        let noone = true;
        Array.prototype.forEach.call(postBlockMain, (blockPost) => {
            if(blockPost.style.display !== "none") {
                noone = false;
            }
        });
        let errBlock = document.getElementsByClassName("post__err")[0];
        if(noone) {
            errBlock.style.display = "block";
        } else {
            errBlock.style.display = "none";
        }
    });
    link.addEventListener("mouseover", () => {
        if(link.style.backgroundColor !== "rgba(66, 133, 244, 0.1)") {
            link.style.backgroundColor = "#f5f5f5";
        }
    });
    link.addEventListener("mouseout", () => {
        if(link.style.backgroundColor !== "rgba(66, 133, 244, 0.1)") {
            off(link);
        }
    })
});
filterBtn.addEventListener("click", () => {
    people.style.display = "none";
    settings.style.display = "block";
    filterBtn.style.backgroundColor = "#fff";
    peopleBtn.style.backgroundColor = "rgb(239, 239, 239)";
});
peopleBtn.addEventListener("click", () => {
    people.style.display = "block";
    settings.style.display = "none";
    filterBtn.style.backgroundColor = "rgb(239, 239, 239)";
    peopleBtn.style.backgroundColor = "#fff";
});
fromDate.addEventListener("change", filteringDates);
toDate.addEventListener("change", filteringDates);

function filteringDates() {
    startDate = fromDate.value;
    endDate = toDate.value;
    data = initData.sort((a, b) => {
        let one = new Date(a.date);
        let two = new Date(b.date);
        if(order == chrono) {
            if(one < two) { return -1; }
            if(one > two) { return 1; }
            return 0;
        } else {
            if(one > two) { return -1; }
            if(one < two) { return 1; }
            return 0;
        }
    }).filter((postItem) => {
        let postDate = new Date(postItem.date);
        let from = new Date(startDate);
        let to = new Date(endDate);
        return postDate > from && postDate < to;
    });
    mainWithComments(data);
    let people = 0;
    let postBlockMain = document.getElementsByClassName("post");
    Array.prototype.forEach.call(postBlockMain, (blockPost) => {
        people++;
    });
    let errBlock = document.getElementsByClassName("post__err")[0];
    if(people == 0) {
        errBlock.style.display = "block";
    } else {
        errBlock.style.display = "none";
    }
}

function filteringSearch() {
    let errBlock = document.getElementsByClassName("post__err")[0];
    searchRecords.addEventListener("keyup", () => {
        let present = 0;
        let curr = searchRecords.value.toLowerCase();
        let postsBlocks = document.getElementsByClassName("post");
        Array.prototype.forEach.call(postsBlocks, (post) => {
            let currTitle = post.getElementsByClassName("post__text")[0].innerHTML.toLowerCase();
            if(!(currTitle.includes(curr) || curr.includes(currTitle))) {
                post.style.display = "none";
            } else{
                post.style.display = "block";
                present++;
            }
        });
        if(present == 0) {
            errBlock.style.display = "block";
        } else {
            errBlock.style.display = "none";
        }
    });
}

function sortingBlocks(posts) {
    function on() {
        iconCurr.className = "fas fa-caret-up";
        filterBtns.style.borderRadius = "5px 5px 0px 0px";
        dp = true;
        filterBtns.style.border = ".5px #ddd solid";
        filterBtns.style.borderBottom = ".5px #f5f5f5 solid";
        filterBox.style.display = "block";
    }
    function off() {
        iconCurr.className = "fas fa-caret-down";
        filterBtns.style.borderRadius = "5px";
        dp = false;
        filterBtns.style.border = ".5px #fff solid";
        filterBox.style.display = "none";
    }
    filterBtns.addEventListener("click", () => {
        if(!dp) {
            on();
        } else {
            off();
        }
    });
    filterBtns.addEventListener("blur", () => {
        setTimeout(() => {
            if(document.activeElement.className !=="box__date") {
                off();
            }
        },150);
    });

    boxBtns[0].addEventListener("click", () => {
        if(boxBtns[0].innerHTML.includes(chrono)) {
            order = chrono;
            boxBtns[0].innerHTML = revChrono;
            filterBtns.innerHTML = order + " " + caret;
            let newArr = data.sort((a, b) => {
                let one = new Date(a.date);
                let two = new Date(b.date)
                if(one < two) { return -1; }
                if(one > two) { return 1; }
                return 0;
            });
            data = newArr;
            mainWithComments(data);
        } else {
            order = revChrono;
            boxBtns[0].innerHTML = chrono;
            filterBtns.innerHTML = order + " " + caret;
            let newArr = data.sort((a, b) => {
                let one = new Date(a.date);
                let two = new Date(b.date)
                if(one > two) { return -1; }
                if(one < two) { return 1; }
                return 0;
            });
            data = newArr;
            mainWithComments(data);
        }
    });
}

btnReset.addEventListener("click", () => {
    let ordererdDates = initData.map((post) => {
        let {date} = post;
        return date.split(" ")[0];
    }).sort((a, b) => {
        let one = new Date(a);
        let two = new Date(b)
        if(one < two) { return -1; }
        if(one > two) { return 1; }
        return 0;
    });
    data = initData;
    order = chrono;

    startDate = ordererdDates.shift();
    fromDate.value = startDate;
    endDate = ordererdDates.pop();
    toDate.value = endDate;
    boxBtns[0].innerHTML = revChrono;
    searchRecords.value = "";
    filterBtns.innerHTML = order + " " + caret;
    Array.prototype.forEach.call(linkForPages, (link) => {
        link.style.backgroundColor = "rgba(66, 133, 244, 0.1)";
        link.style.color = "rgb(66, 133, 244)";
        link.getElementsByClassName("fa-check")[0].style.display = "block";
    })
    mainWithComments(
        initData.sort((a, b) => {
            let one = new Date(a.date);
            let two = new Date(b.date)
            if(one < two) { return -1; }
            if(one > two) { return 1; }
            return 0;
        }));
});
