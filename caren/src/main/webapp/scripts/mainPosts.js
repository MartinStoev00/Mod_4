let mainPostsBlocks, postsMain;
let headerBlock = document.getElementsByClassName("header")[0];
let headerH = headerBlock.getBoundingClientRect().height;
let data, initData;
if(document.getElementsByClassName("mainPosts").length > 0) {
    mainPostsBlocks = document.getElementsByClassName("mainPosts")[0];
    postsMain = mainPostsBlocks.getElementsByClassName("posts")[0];
}
let numDisplayed = 8;
let readMore = `<span class="ReadMore">...<span  style="color: rgb(66, 133, 244);cursor:pointer;"> Read More</span></span>`;
let charLimit = 400;

function display(posts, comments) {
    postsMain.innerHTML = `<div class="post__err">No Results Found</div>`;
    posts.forEach((post) => {
        let {rid: postID, name, date, img, text, title} = post;
        let dataAboutComments = [];
        comments.forEach((comment) => {
            if(postID == comment.rid) {
                dataAboutComments.push(comment);
            }
        })
        postsMain.innerHTML += postsTemplate(img, name, date, title, JSON.stringify(text), allCommentsTemplate(dataAboutComments), numOfCommentsTemplate(dataAboutComments.length));
    });
}

function postsTemplate(img, name, date, title, text, comments, num) {
    let returned = 
        `<div class="post" data-link="${title}">
            <div class="post__header">
                <div class="post__pic" style="background-image: url(../Pictures/profile_pics/${img}.jpg);"></div>
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
                        <div class="comments__urs-wrapper">
                            <input class="comments__urs-input"type="text" placeholder="Write your comment">
                            <input type="text" readonly class="comments__urs-click" value="public">
                            <div class="visibility__options">
                                <p class="visibility__select">public</p>
                                <p class="visibility__select">private</p>
                                <p class="visibility__select">perosonal</p>
                            </div>
                        </div>
                        <button class="comments__urs-send"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
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

function allCommentsTemplate(comments) {
    let commentsText = ``;
    let sortedComments = comments;
    sortedComments.sort((a, b) => {
        let one = new Date(a.date_added);
        let two = new Date(b.date_added)
        if(one < two) { return -1; }
        if(one > two) { return 1; }
        return 0;
    });
    let filteredSortedComments = sortedComments.filter((comment) => {
        return comment.parentid == 0;
    })
    let resultedComments = [];
    filteredSortedComments.forEach((commentparentid) => {
        resultedComments.push(commentparentid);
        sortedComments.forEach((candidateChildComment) => {
            if(commentparentid.cid == candidateChildComment.parentid) {
                resultedComments.push(candidateChildComment);
            }
        })
    })
    
    resultedComments.forEach((comment, index) => {
        if(index < numDisplayed) {
            commentsText += commentTemplate(comment);
        }
    });
    return commentsText;
}

function commentTemplate(comment) {
    let {name, pid, text, date_added, parentid} = comment;
    let state = parentid == 0 ? "" : "comment__response";
    let returned = 
        `<div class="comment ${state}">
            <div class="comment__pic" style="background-image: url(../Pictures/profile_pics/${pid}.jpg);"></div>
            <div class="comment__wrapper">
                <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;">${name} </span>${text}</div>
                <div class="comment__date">${date_added}</div>
            </div>
        </div>`
    return returned;
}

function addExpand() {
    let posts = document.getElementsByClassName("post");
    Array.prototype.forEach.call(posts, (post) => {
        let dp = false;
        let readMoreBlock = post.getElementsByClassName("ReadMore");
        let postTextBlock = post.getElementsByClassName("post__text"); 
        let visibility = post.getElementsByClassName("comments__urs-click")[0];
        let visOptions = post.getElementsByClassName("visibility__options")[0];
        let inputSelected = post.getElementsByClassName("comments__urs-input")[0];
        let inputSend = post.getElementsByClassName("comments__urs-send")[0];
        function on() {
            visOptions.style.display = "block";
            visibility.style.borderRadius = "0 14px 0px 0px";
            visibility.style.borderBottom = ".5px solid rgb(251, 251, 251)";
            visibility.style.top = (inputSelected.offsetTop - .5) + "px";
            dp = true;
        }
        function off() {
            visibility.style.top = (inputSelected.offsetTop + .5) + "px";
            visOptions.style.display = "none";
            visibility.style.borderRadius = "0 30px 30px 0";
            visibility.style.borderBottom = ".5px solid #ddd";
            dp = false;
        }
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
        visibility.style.top = (inputSelected.offsetTop + .5) + "px";
        visibility.style.left = (inputSelected.getBoundingClientRect().left + inputSelected.getBoundingClientRect().width - visibility.getBoundingClientRect().width - 1) + "px";
        visibility.style.height = (inputSelected.getBoundingClientRect().height - 2) + "px";
        visOptions.style.top = (visibility.offsetTop + visibility.getBoundingClientRect().height - .5) + "px";
        visOptions.style.left = (visibility.getBoundingClientRect().left) + "px"; 
        visOptions.style.width = (visibility.getBoundingClientRect().width - 1.5) + "px";   
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
        inputSend.addEventListener("click", () => {
            if(inputSelected.value.length > 0) {

            }
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

function doEveryThing(posts, comments) {
    display(posts, comments);
    fillPosts(posts, comments);
    addExpand();
}

export default function mainPosts(something, comments) {
    data = something;
    initData = something;
    doEveryThing(initData, comments);
}
