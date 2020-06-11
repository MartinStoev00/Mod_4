import {putcomment} from "../main.js";

let mainPostsBlocks, postsMain;
let headerBlock = document.getElementsByClassName("header")[0];
let headerH = headerBlock.getBoundingClientRect().height;
let data, initData;
if(document.getElementsByClassName("mainPosts").length > 0) {
    mainPostsBlocks = document.getElementsByClassName("mainPosts")[0];
    postsMain = mainPostsBlocks.getElementsByClassName("posts")[0];
}
let numDisplayed = 100;
let readMore = `<span class="ReadMore">...<span  style="color: rgb(66, 133, 244);cursor:pointer;"> Read More</span></span>`;
let charLimit = 400;

function display(posts, comments) {
	console.log(posts);
    postsMain.innerHTML = `<div class="post__err">No Results Found</div>`;
    posts.forEach((post) => {
        let {rid: postID, name, date, pid, text, title} = post;
        let dataAboutComments = [];
        comments.forEach((comment) => {
            if(postID == comment.rid) {
                dataAboutComments.push(comment);
            }
        })
        postsMain.innerHTML += postsTemplate(pid, name, date, title, JSON.stringify(text), allCommentsTemplate(dataAboutComments), numOfCommentsTemplate(dataAboutComments.length), postID);
    });
}

function postsTemplate(img, name, date, title, text, comments, num, rid) {
    let returned = 
        `<div class="post" data-link="${title}" data-id="${rid}">
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
                <!-- num was here-->
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
                                <p class="visibility__select">personal</p>
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
    let commentsText = `<div class="comment__thread">`;
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
            if(comment.parentid == 0 && index !== 0) {
                commentsText += `</div><div class="comment__thread">`;
            }
            commentsText += commentTemplate(comment);
            if(comment.parentid == 0 && index !== resultedComments.length - 1 && resultedComments[index + 1].parentid !== 0) {
                commentsText += `<div class="comment__showReplies">Show Replies</div>`
            }
        }
    });
    commentsText += "</div>";
    return commentsText;
}

function commentTemplate(comment) {
    let {name, pid, text, date_added, parentid, visibility, cid} = comment;
    let state = parentid == 0 ? "" : "comment__response";
    let returned = 
        `<div class="comment ${state}" data-cid="${cid}">
            <div class="comment__pic" style="background-image: url(../Pictures/profile_pics/${pid}.jpg);"></div>
            <div class="comment__wrapper">
                <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;">${name} </span>${text}</div>
                <div class="comment__date">
                	<span style="color: blue; text-decoration: underline; margin-right: 15px;">Reply</span>
                	<span>${date_added}</span>
                	<i class="fas fa-circle" style="margin: 5px; font-size: 5px;padding:5px;"></i>
                	<span style="text-transform: capitalize;">${visibility}</span>
                </div>
            </div>
        </div>`
    return returned;
}


function addExpand() {
    let posts = document.getElementsByClassName("post");
    Array.prototype.forEach.call(posts, (post) => {
    	function addClickEventExpandReplies(){
    		let commentsSectionDownBelow = post.getElementsByClassName("commentthread");
            Array.prototype.forEach.call(commentsSectionDownBelow, (currentCommentThread) =>  {
                let showMoreRep = currentCommentThread.getElementsByClassName("commentshowReplies")[0];
                showMoreRep.addEventListener("click", () => {
                    let responseComments = currentCommentThread.getElementsByClassName("comment__response");
                    Array.prototype.forEach.call(responseComments, (responseComment) => {
                        responseComment.style.display = "flex";
                    })
                    showMoreRep.style.display = "none";
                })

            });
    	}
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
            	let commentSectionText = post.getElementsByClassName("comments")[0];
            	let commentThreadsInTheCommentSec = commentSectionText.getElementsByClassName("comment__thread");
            	let yourCommentField = post.getElementsByClassName("comments__urs")[0];
            	let commentSecText = "";
            	
            	Array.prototype.forEach.call( commentThreadsInTheCommentSec, (currentCommentThreadSelected)=>{
            		if (currentCommentThreadSelected) {
            			commentSecText += currentCommentThreadSelected.innerHTML;
            		}
            	})
            	
            	commentSecText += commentTemplate(objectSent);
            	commentSecText += '<div class="comments__urs">' + yourCommentField.innerHTML + '</div>';
            	console.log(commentSectionText.innerHTML);
            	commentSectionText.innerHTML = commentSecText;
            	let nameIWantToChange = post.getElementsByClassName("comment__text")[post.getElementsByClassName("comment__text").length-1].getElementsByTagName("span")[0];
            	nameIWantToChange.innerHTML = "You ";
            	
            	addClickEventExpandReplies();
            	
            }
        });
        let btnsOptions = visOptions.getElementsByClassName("visibility__select");
        Array.prototype.forEach.call(btnsOptions, (btn) => {
            btn.addEventListener("click", () => {
                visibility.value = btn.innerHTML;
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
                })
            }

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

function usePutComment(input, content){
	putcomment("http://localhost:8080/caren/rest/comment/"+input, content).then((data) => {
	    console.log(input);
	}).catch((err) => {
	    console.log(err);
	});
}
