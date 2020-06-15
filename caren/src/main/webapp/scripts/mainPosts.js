import {usePutComment} from "../main.js";
import {postsTemplate, commentTemplate} from "./postsText.js";

let mainPostsBlocks = document.getElementsByClassName("mainPosts")[0]
let postsMain = mainPostsBlocks.getElementsByClassName("posts")[0];
let headerBlock = document.getElementsByClassName("header")[0];
let headerH = headerBlock.getBoundingClientRect().height;
let data, initData;
let charLimit = 400;
let readMore = `<span class="ReadMore">...<span  style="color: rgb(66, 133, 244);cursor:pointer;"> Read More</span></span>`;

function visibilityAndReadMore(post) {
    let dp = false;
    let readMoreBlock = post.getElementsByClassName("ReadMore");
    let postTextBlock = post.getElementsByClassName("post__text"); 
    let visibility = post.getElementsByClassName("comments__urs-click")[0];
    let visOptions = post.getElementsByClassName("visibility__options")[0];
    let btnsOptions = visOptions.getElementsByClassName("visibility__select");
    function on() {
        visOptions.style.display = "block";
        visibility.style.borderRadius = "0 14px 0px 0px";
        visibility.style.borderBottom = ".5px solid rgb(251, 251, 251)";
        dp = true;
    }
    function off() {
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
    visOptions.style.top = (visibility.offsetTop + visibility.getBoundingClientRect().height - .5) + "px";
    visOptions.style.left = (visibility.getBoundingClientRect().left) + "px"; 
    visOptions.style.width = (visibility.getBoundingClientRect().width - 1.5) + "px";   
    visibility.addEventListener("click", () => {
        visOptions.style.top = (visibility.offsetTop + visibility.getBoundingClientRect().height - .5) + "px";
        visOptions.style.left = (visibility.getBoundingClientRect().left) + "px"; 
        visOptions.style.width = (visibility.getBoundingClientRect().width - 1.5) + "px"; 
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

    Array.prototype.forEach.call(btnsOptions, (btn) => {
        btn.addEventListener("click", () => {
            let originalValue = visibility.value;
            let newValue = btn.innerHTML;
            visibility.value = newValue;
            btn.innerHTML = originalValue;
        });
    });
    let AcommentsSectionDownBelow = post.getElementsByClassName("comment__thread");
    Array.prototype.forEach.call(AcommentsSectionDownBelow, (currentCommentThread) =>  {
        if (currentCommentThread.getElementsByClassName("comment__showReplies")[0]) {
            let AshowMoreRep = currentCommentThread.getElementsByClassName("comment__showReplies")[0];
            AshowMoreRep.addEventListener("click", () => {
                let AresponseComments = currentCommentThread.getElementsByClassName("comment__response");
                Array.prototype.forEach.call(AresponseComments, (responseComment) => {
                    responseComment.style.display = "flex";
                })
                AshowMoreRep.style.display = "none";
                let dataBlock = currentCommentThread.getElementsByClassName("comment__data")[0];
                dataBlock.style.justifyContent = "flex-end";
            })
        }
    });
}

function sendingDataFunctionality(post) {
    let inputSelected = post.getElementsByClassName("comments__urs-input")[0];
    let inputSend = post.getElementsByClassName("comments__urs-send")[0];
    let visibility = post.getElementsByClassName("comments__urs-click")[0];
    inputSend.addEventListener("click", () => {
        if(inputSelected.value.length > 0) {
            
            function normalize(input){
                if (input.length == 1) {
                    return "0"+input;
                }
                return input;
            }
            
            let idINeedToSendTo = post.getAttribute("data-id");
            let contentINeedToSendTo = inputSelected.value;
            let visibilityINeedToSendTo = visibility.value;
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth()+1;
            var day = today.getDate();
            var hour = today.getHours();
            var minute = today.getMinutes();
            var second = today.getSeconds();
            var date = year+'-'+normalize(""+month)+'-'+normalize(""+day)+ ' ' + normalize(""+hour) + ":" + normalize(""+minute) + ":" + normalize(""+second);
            let objectSent = {
                    cid: 0,
                    rid: idINeedToSendTo,
                    pid: 0,
                    visibility: visibilityINeedToSendTo,
                    text: contentINeedToSendTo,
                    date_added: date,
                    parentid: 0
            }
            usePutComment(idINeedToSendTo, objectSent);
            inputSelected.value = "";
            let yourCommentSection = post.getElementsByClassName("comments")[0];
            let yourCommentField = yourCommentSection.getElementsByClassName("comments__urs")[0];
            let createdDiv = document.createElement("div");
            let createdDivPic = document.createElement("div");
            let createdDivWrapper = document.createElement("div");
            let createdDivWrapperText = document.createElement("div");
            let createdDivWrapperTextName = document.createElement("span");
            let createdDivWrapperDate = document.createElement("div");
            let createdDivWrapperDateReply = document.createElement("span");
            let createdDivWrapperDateDate = document.createElement("span");
            let createdDivWrapperDateIcon = document.createElement("i");
            let createdDivWrapperDateVisibility = document.createElement("span");
            let createdDivWrapperTextContent = document.createTextNode(objectSent.text);
            let createdDivWrapperDateDateContent = document.createTextNode(objectSent.date_added);
            let createdDivWrapperTextNameContent = document.createTextNode("You");
            let createdDivWrapperDateReplyContent = document.createTextNode("Reply");
            let createdDivWrapperDateVisibilityContent = document.createTextNode(objectSent.visibility);
            createdDiv.setAttribute("data-cid", "0");
            createdDiv.setAttribute("class", "comment");
            createdDivPic.setAttribute("class", "comment__pic");
            createdDivPic.setAttribute("style", "background-image: url(../Pictures/profile_pics/1.jpg);");
            createdDivWrapper.setAttribute("class", "comment__wrapper");
            createdDivWrapperText.setAttribute("class", "comment__text");
            createdDivWrapperTextName.setAttribute("style", "color: rgb(56, 88, 152);font-weight: 600;");
            createdDivWrapperDate.setAttribute("class", "comment__date");
            createdDivWrapperDateReply.setAttribute("style", "color: rgb(66, 133, 244); text-decoration: underline; margin-right: 7px;");
            createdDivWrapperDateIcon.setAttribute("class", "fas fa-circle");
            createdDivWrapperDateIcon.setAttribute("style", "margin: 5px; font-size: 5px;padding:5px;");
            createdDivWrapperDateVisibility.setAttribute("style", "text-transform: capitalize;");
            createdDivWrapperTextName.appendChild(createdDivWrapperTextNameContent);
            createdDivWrapperText.appendChild(createdDivWrapperTextName);
            createdDivWrapperText.appendChild(createdDivWrapperTextContent);
            createdDivWrapperDateReply.appendChild(createdDivWrapperDateReplyContent);
            createdDivWrapperDateDate.appendChild(createdDivWrapperDateDateContent);
            createdDivWrapperDateVisibility.appendChild(createdDivWrapperDateVisibilityContent);
            createdDivWrapperDate.appendChild(createdDivWrapperDateReply);
            createdDivWrapperDate.appendChild(createdDivWrapperDateDate);
            createdDivWrapperDate.appendChild(createdDivWrapperDateIcon);
            createdDivWrapperDate.appendChild(createdDivWrapperDateVisibility);
            createdDivWrapper.appendChild(createdDivWrapperText);
            createdDivWrapper.appendChild(createdDivWrapperDate);
            createdDiv.appendChild(createdDivPic);
            createdDiv.appendChild(createdDivWrapper);
            yourCommentSection.insertBefore(createdDiv, yourCommentField);
            
            let nameIWantToChange = post.getElementsByClassName("comment__text")[post.getElementsByClassName("comment__text").length-1].getElementsByTagName("span")[0];
            nameIWantToChange.innerHTML = "You ";
        }
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

function doEveryThing(posts, comments) {
    postsMain.innerHTML = `<div class="post__err">No Results Found</div>`;
    posts.forEach((post) => {
        let {record_id: postID, posted_by_id, posted_by_name, date_added, posted_for_id, data, type} = post;
        let dataAboutComments = [];
        comments.forEach((comment) => {
            if(postID == comment.rid) {
                dataAboutComments.push(comment);
            }
        })
        postsMain.innerHTML += postsTemplate(posted_for_id, posted_by_id, posted_by_name, date_added, type, JSON.stringify(data), dataAboutComments, dataAboutComments.length, postID);
    });
    fillPosts(posts, comments);
    Array.prototype.forEach.call(document.getElementsByClassName("post"), (postBlock) => {
        visibilityAndReadMore(postBlock);
        sendingDataFunctionality(postBlock);
    });
}

export default function mainPosts(something, comments) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";
    mainPostsBlocks.style.marginTop = headerH + "px";
    data = something;
    initData = something;
    doEveryThing(initData, comments);
}


