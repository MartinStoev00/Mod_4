let mainPostsBlocks, postsMain;
let headerBlock = document.getElementsByClassName("header")[0];
let headerH = headerBlock.getBoundingClientRect().height;
let data, initData;
if(document.getElementsByClassName("mainPosts").length > 0) {
    mainPostsBlocks = document.getElementsByClassName("mainPosts")[0];
    postsMain = mainPostsBlocks.getElementsByClassName("posts")[0];
}
let numDisplayed = 1;
let readMore = `<span class="ReadMore">...<span  style="color: rgb(66, 133, 244);cursor:pointer;"> Read More</span></span>`;
let charLimit = 400;

function display(posts) {
    postsMain.innerHTML = `<div class="post__err">No Results Found</div>`;
    posts.forEach((post) => {
        let {name, date, img, text, title, comments} = post;
        postsMain.innerHTML += postsTemplate(img, name, date, title, JSON.stringify(text), allCommentsTemplate(comments), numOfCommentsTemplate(comments.length));
    });
}

function commentTemplate(comment) {
    let {img, name, text, date} = comment;
    let returned = 
        `<div class="comment">
            <div class="comment__pic" style="background-image: url(../Pictures/profile_pics/${img});"></div>
            <div class="comment__wrapper">
                <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;">${name} </span>${text}</div>
                <div class="comment__date">${date}</div>
            </div>
        </div>`
    return returned;
}

function numOfCommentsTemplate(length) {
    let returned = length > 3 ? ` 
        <div class="comments__info">
            <div class="comments__viewall">View All Comments</div>
            <div class="comments__count">${numDisplayed} out of ${length}</div>
        </div>` : ``;
    return returned;
}

function postsTemplate(img, name, date, title, text, comments, num) {
    let returned = 
        `<div class="post" data-link="${title}">
            <div class="post__header">
                <div class="post__pic" style="background-image: url(../Pictures/profile_pics/${img});"></div>
                <div class="post__info">
                    <div class="post__uploader">${name}</div>
                    <div class="post__date">${date}</div>
                </div>
            </div>
            <div class="post__title">${title.replace("_", " ")}</div>
            <div class="post__text">${text.replace(/"/g, ``)}</div>
            <div class="comments">
                ${num}
                ${comments}
               <div class="comments__urs">
                    <div class="comments__urs-pic" style="background-image: url(../Pictures/profile_pics/1.jpg);"></div>
                    <div class="comments__urs-form">
                        <input class="comments__urs-input"type="text" placeholder="Write your comment">
                        <div class="comments__urs-line"></div>
                        <input type="text" readonly class="comments__urs-click" value="visible to everyone">
                        <div class="visibility__options">
                            <p class="visibility__select">visible to everyone</p>
                            <p class="visibility__select">visible to caretakers</p>
                            <p class="visibility__select">visible to patients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    return returned;
}

function allCommentsTemplate(comments) {
    let commentsText = ``;
    comments.forEach((comment, index) => {
        if(index < numDisplayed) {
            commentsText += commentTemplate(comment);
        }
    });
    return commentsText;
}

function addExpand() {
    let posts = document.getElementsByClassName("post");
    Array.prototype.forEach.call(posts, (post) => {
        let postTextBlock = post.getElementsByClassName("post__text"); 
        let readMoreBlock = post.getElementsByClassName("ReadMore");
        if(postTextBlock.length > 0 && postTextBlock[0].innerHTML.length > 400) {
            let postText = post.getElementsByClassName("post__text")[0];
            let text = postText.innerHTML;
            let firstHalf = text.substring(0, charLimit);
            let secondHalf = `<span class="more" style="display:none;">${text.substring(charLimit, text.length)}</span>`;
            postText.innerHTML = firstHalf + secondHalf + readMore;
        }
        if(readMoreBlock.length > 0) {
            let dpied = false;
            let click = readMoreBlock[0];
            let more = post.getElementsByClassName("more")[0];
            click.addEventListener("click",() => {
                if(!dpied) {
                    more.style.display = "inline";
                    dpied = true;
                    click.innerHTML = `<span style="color: rgb(66, 133, 244);cursor:pointer;"> Read Less</span>`;
                } else {
                    click.innerHTML = `...<span style="color: rgb(66, 133, 244);cursor:pointer;"> Read More</span>`;
                    more.style.display = "none";
                    dpied = false;
                }
            });
        }
        let dp = false;
        let inputSelected = post.getElementsByClassName("comments__urs-input")[0];
        let visibility = post.getElementsByClassName("comments__urs-click")[0];
        let line = post.getElementsByClassName("comments__urs-line")[0];
        let visOptions = post.getElementsByClassName("visibility__options")[0];
        visibility.style.top = (inputSelected.offsetTop + .5) + "px";
        visibility.style.left = (inputSelected.getBoundingClientRect().left + inputSelected.getBoundingClientRect().width - visibility.getBoundingClientRect().width - 1) + "px";
        visibility.style.height = (inputSelected.getBoundingClientRect().height - 2) + "px";
        line.style.top = (visibility.offsetTop + 2) + "px";
        line.style.height = (visibility.getBoundingClientRect().height - 4) + "px";
        line.style.left = (visibility.getBoundingClientRect().left - 1) + "px";
        visOptions.style.top = (visibility.offsetTop + visibility.getBoundingClientRect().height) + "px";
        visOptions.style.left = (visibility.getBoundingClientRect().left) + "px"; 
        visOptions.style.width = (visibility.getBoundingClientRect().width) + "px";   
        function on() {
            visOptions.style.display = "block";
            line.style.display = "none";
            visibility.style.borderRadius = "14px 14px 0px 0px";
            visibility.style.border = ".5px solid #ddd";
            visibility.style.borderBottom = "none";
            visibility.style.top = (inputSelected.offsetTop - .5) + "px";
            dp = true;
        }
        function off() {
            visibility.style.top = (inputSelected.offsetTop + .5) + "px";
            visOptions.style.display = "none";
            line.style.display = "block";
            visibility.style.borderRadius = "30px";
            visibility.style.border = "none";
            dp = false;
        }
        visibility.addEventListener("click", () => {
            if(!dp) {
                on();
            } else {
                off();
            }
        });
        visibility.addEventListener("blur", () => {
            setTimeout(() => {
                off();
            }, 150);
        });
        let btnsOptions = visOptions.getElementsByClassName("visibility__select");
        Array.prototype.forEach.call(btnsOptions, (btn) => {
            btn.addEventListener("click", () => {
                visibility.value = btn.innerHTML;
            });
        });
    });
}

function fillPosts(posts) {
    let postsBlocks = document.getElementsByClassName("post");
    Array.prototype.forEach.call(postsBlocks, (block, i) => {
        if(block.getElementsByClassName("comments__viewall").length > 0) {
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
                    count.innerHTML = `${posts[i].comments.length} out of ${posts[i].comments.length}`;
                    posts[i].comments.forEach((comment) => {
                        commentsText += commentTemplate(comment);
                    });
                    section.innerHTML = commentsText;
                    dp = true;
                } else {
                    viewall.innerHTML = `View All Comments`;
                    count.innerHTML = `${numDisplayed} out of ${posts[i].comments.length}`;
                    posts[i].comments.forEach((comment, num) => {
                        if(num < numDisplayed) {
                            commentsText += commentTemplate(comment);
                        }
                    });
                    section.innerHTML = commentsText;
                    dp = false;
                }
            });
        }
    });
}

mainPostsBlocks.style.marginTop = headerH + "px";
document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";

function doEveryThing(posts) {
    display(posts);
    fillPosts(posts);
    addExpand();
}

export default function mainPosts(something) {
    data = something;
    initData = something;
    doEveryThing(initData);
}
