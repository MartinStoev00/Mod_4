import {usePutComment} from "../main.js";
import {postsTemplate, commentTemplate} from "./postsText.js";

let mainPostsBlocks = document.getElementsByClassName("mainPosts")[0]
let postsMain = mainPostsBlocks.getElementsByClassName("posts")[0];
let headerBlock = document.getElementsByClassName("header")[0];
let headerH = headerBlock.getBoundingClientRect().height;
let data, initData;
let charLimit = 300;
let readMore = `<span class="ReadMore" style="color: rgb(66, 133, 244);"> Read More</span>`;

function visibilityAndReadMore(post) {
    let dp = false;
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
    let commentInfoButton = post.getElementsByClassName("comments__info")[0];
	let urCommentSection = post.getElementsByClassName("comments__urs")[0];
    let originalText = commentInfoButton.innerHTML;

    if(postTextBlock[0].innerHTML.length > charLimit) {
        let text = postTextBlock[0].getElementsByClassName("content")[0].innerHTML;
        let firstHalf = text.substring(0, charLimit);
        let secondHalf = `<span class="more" style="display:none;">${text.substring(charLimit, text.length)}</span>`;
        postTextBlock[0].getElementsByClassName("content")[0].innerHTML = firstHalf + readMore + secondHalf;
    }
    
    post.addEventListener("click", () => {
    	if(document.getElementsByClassName("header__chart")[0].getAttribute("data-set") == "off") {
    		let originalDisplay = [];
        	let allPostsOnPageCurrent = document.getElementsByClassName("post");
        	let goBackBtn = document.getElementsByClassName("post__goBack")[0];
        	Array.prototype.forEach.call(allPostsOnPageCurrent, (postSelectedCurrent) => {
        		if(postSelectedCurrent.getAttribute("data-id") !== post.getAttribute("data-id") && postSelectedCurrent.style.display != "none") {
        			postSelectedCurrent.style.display = "none";
        			originalDisplay.push(postSelectedCurrent.getAttribute("data-id"));
        		}
        	});
        	if(goBackBtn.style.display == "none" || goBackBtn.style.display == "") {
        		commentInfoButton.style.borderBottom = ".5px solid #ddd";
        		commentInfoButton.innerHTML = "Collapse Comments";
            	urCommentSection.style.display = "flex";
            	Array.prototype.forEach.call(post.getElementsByClassName("comment"), (commentSelected) => {
            		if(commentSelected.getAttribute("class") == "comment") {
            			commentSelected.style.display = "flex";
            		}
            	});
            	
            	Array.prototype.forEach.call(document.getElementsByClassName("comment__data"), (commentData) => {
            		commentData.style.justifyContent = "space-between";
            		commentData.getElementsByClassName("comment__showReplies")[0].style.display = "flex";
            	});
            	commentInfoButton.style.display = "none";
        	}
        	document.getElementsByClassName("sidebar")[0].style.opacity = "0.5";
        	if(post.getElementsByClassName("more")[0]) {
        		post.getElementsByClassName("more")[0].style.display = "inline";
        		post.getElementsByClassName("ReadMore")[0].style.display = "none";
        	}
        	document.getElementsByClassName("sidebar")[0].style.pointerEvents =  "none";
        	goBackBtn.style.display = "block";
        	goBackBtn.addEventListener("click", () => {
            	document.getElementsByClassName("sidebar")[0].style.cursor = "auto";
        		if(post.getElementsByClassName("comments__info")[0].innerHTML == "Collapse Comments") {
                	commentInfoButton.style.display = "flex";
        			commentInfoButton.style.borderBottom = "none";
            		commentInfoButton.innerHTML = originalText;
            		urCommentSection.style.display = "none";
                	Array.prototype.forEach.call(post.getElementsByClassName("comment"), (comment) => {
                		comment.style.display = "none";
                	})
        		}
        		originalDisplay.forEach((postID) => {
        			Array.prototype.forEach.call(allPostsOnPageCurrent,(postSelectedCurrently) => {
        				if(postSelectedCurrently.getAttribute("data-id") == postID) {
        					postSelectedCurrently.style.display = "flex";
        				}
        			});
        		});
            	if(post.getElementsByClassName("more")[0]) {
            		post.getElementsByClassName("more")[0].style.display = "none";
            		post.getElementsByClassName("ReadMore")[0].style.display = "inline";
            	}
            	document.getElementsByClassName("sidebar")[0].style.pointerEvents =  "auto";
        		goBackBtn.style.display = "none";
            	document.getElementsByClassName("sidebar")[0].style.opacity = "1";
        	});
    	}
    });
    

    
}

function sendingDataFunctionality(post) {
    let inputSelected = post.getElementsByClassName("comments__urs-input")[0];
    let inputSend = post.getElementsByClassName("comments__urs-send")[0];
    let visibility = post.getElementsByClassName("comments__urs-click")[0];
    let repliesTo;
    function normalize(input){
        if (input.length == 1) {
            return "0"+input;
        }
        return input;
    }
    inputSend.addEventListener("click", () => {
        if(inputSelected.value.length > 0) {
            
            let idINeedToSendTo = post.getAttribute("data-id");
            let contentINeedToSendTo = inputSelected.value;
            let visibilityINeedToSendTo = visibility.value;
            let today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth()+1;
            let day = today.getDate();
            let hour = today.getHours();
            let minute = today.getMinutes();
            let second = today.getSeconds();
            let date = year+'-'+normalize(""+month)+'-'+normalize(""+day)+ ' ' + normalize(""+hour) + ":" + normalize(""+minute) + ":" + normalize(""+second);
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
            let createdDivWrapperTextNameContent = document.createTextNode("You ");
            let createdDivWrapperDateReplyContent = document.createTextNode("Reply");
            let createdDivWrapperDateVisibilityContent = document.createTextNode(objectSent.visibility);
            createdDiv.setAttribute("data-cid", "0");
            createdDiv.setAttribute("class", "comment");
            createdDiv.setAttribute("style","display: flex;");
            createdDivPic.setAttribute("class", "comment__pic");
            createdDivPic.setAttribute("style", "background-image: url(../Pictures/profile_pics/1.jpg);");
            createdDivWrapper.setAttribute("class", "comment__wrapper");
            createdDivWrapperText.setAttribute("class", "comment__text");
            createdDivWrapperTextName.setAttribute("style", "color: purple;font-weight: 600;");
            createdDivWrapperDate.setAttribute("class", "comment__date");
            createdDivWrapperDateReply.setAttribute("style", "color: rgb(66, 133, 244); text-decoration: underline; margin-right: 7px;");
            createdDivWrapperDateReply.setAttribute("class", "comment__replyBtn");
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
        }
    });
    let replyButtons = post.getElementsByClassName("comment__replyBtn");
    Array.prototype.forEach.call(replyButtons, (replyButton, index) => {
    	replyButton.addEventListener("click", () => {
    		let selectedThread = post.getElementsByClassName("comment__thread")[index];
    		if(selectedThread.getElementsByClassName("comment__showReplies").length > 0) {
        		let currentThreadReplyBtn = selectedThread.getElementsByClassName("comment__showReplies")[0];
        		currentThreadReplyBtn.click();
    		}
    		let everyThread = post.getElementsByClassName("comment__thread");
    		Array.prototype.forEach.call(everyThread, (currentTread, i) => {
    			if(i > index) {
    				currentTread.style.display = "none";
    			} else if(i == index) {
    				repliesTo = currentTread.getElementsByClassName("comment")[0].getAttribute("data-cid");
    			}
    		});
    		let viewTheRestOfTheComments = document.createElement("div");
    		viewTheRestOfTheComments.setAttribute("class", "comment__showRest");
    		viewTheRestOfTheComments.innerHTML = `Show The Rest Of The Comments <i class="fas fa-reply"></i>`;
    		let yourCommentSection = post.getElementsByClassName("comments")[0];
            let yourCommentField = yourCommentSection.getElementsByClassName("comments__urs")[0];
            if(!post.innerHTML.includes(`Show The Rest Of The Comments <i class="fas fa-reply"></i>`)) {
            	yourCommentSection.insertBefore(viewTheRestOfTheComments, yourCommentField);
            } else {
            	let showTheRestAgain = post.getElementsByClassName("comment__showRest")[0];
            	showTheRestAgain.style.display = "block";
            }
            let replyBtnNewlyCreated = yourCommentField.getElementsByClassName("comments__urs-reply")[0];
            let sendBtnOld = yourCommentField.getElementsByClassName("comments__urs-send")[0];
            sendBtnOld.style.display = "none";
            replyBtnNewlyCreated.style.display = "flex";
            let yourCommentFieldInput = yourCommentField.getElementsByClassName("comments__urs-input")[0];
            yourCommentFieldInput.focus();
            let showTheRestBtn = post.getElementsByClassName("comment__showRest")[0];
            showTheRestBtn.addEventListener("click", () => {
            	showTheRestBtn.style.display = "none";
            	Array.prototype.forEach.call(everyThread, (currentTread) => {
            		currentTread.style.display = "block";
        		});
            	sendBtnOld.style.display = "flex";
                replyBtnNewlyCreated.style.display = "none";
            });
    	});
    });
    let postReplyBtnForPost = post.getElementsByClassName("comments__urs-reply")[0];
    postReplyBtnForPost.addEventListener("click", () => {
    	let yourCommentSection = post.getElementsByClassName("comments")[0];
        let yourCommentField = yourCommentSection.getElementsByClassName("comments__urs")[0];
        let replyBtnNewlyCreated = yourCommentField.getElementsByClassName("comments__urs-reply")[0];
        let sendBtnOld = yourCommentField.getElementsByClassName("comments__urs-send")[0];
    	let idINeedToSendTo = post.getAttribute("data-id");
        let contentINeedToSendTo = inputSelected.value;
        let visibilityINeedToSendTo = visibility.value;
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth()+1;
        let day = today.getDate();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        let date = year+'-'+normalize(""+month)+'-'+normalize(""+day)+ ' ' + normalize(""+hour) + ":" + normalize(""+minute) + ":" + normalize(""+second);
        let objectSent = {
                cid: 0,
                rid: idINeedToSendTo,
                pid: 0,
                visibility: visibilityINeedToSendTo,
                text: contentINeedToSendTo,
                date_added: date,
                parentid: repliesTo
        }
        usePutComment(idINeedToSendTo, objectSent);
        let responseBlockCreated = document.createElement("div");
        responseBlockCreated.setAttribute("class", "comment comment__response");
        responseBlockCreated.setAttribute("style", "display: flex;");
        responseBlockCreated.innerHTML = `
        	<div class="comment__pic" style="background-image: url(../Pictures/profile_pics/1.jpg);"></div>
            <div class="comment__wrapper">
        		<div class="comment__text"><span style="color: purple;font-weight: 600;">You </span>${contentINeedToSendTo}</div>
                <div class="comment__date">
        			<span>${date}</span>
        			<i class="fas fa-circle" style="margin: 5px; font-size: 5px;padding:5px;"></i>
        			<span style="text-transform: capitalize;">${visibilityINeedToSendTo}</span>
        		</div>
        	</div>`;
        let allThreadsInThisPost = post.getElementsByClassName("comment__thread");
        Array.prototype.forEach.call(allThreadsInThisPost, (givenThread) => {
        	let frstElementInTheThread = givenThread.getElementsByClassName("comment")[0];
        	if(frstElementInTheThread.getAttribute("data-cid") == repliesTo) {
        		givenThread.appendChild(responseBlockCreated);
        	}
        });
        inputSelected.value = "";
    	sendBtnOld.style.display = "flex";
        replyBtnNewlyCreated.style.display = "none";
        let showRestOfTheCommentsBtn = post.getElementsByClassName("comment__showRest")[0];
        showRestOfTheCommentsBtn.click();
    });
}

function doEveryThing(posts, comments) {
    postsMain.innerHTML = `<div class="post__err">No Results Found</div>
<div class="post__goBack"><i class="fas fa-arrow-left"></i> Go Back</div>`;
    posts.forEach((post) => {
        let {record_id, posted_by_id, posted_by_name, date_added, posted_for_id, data, type} = post;
        let dataAboutComments = [];
        comments.forEach((comment) => {
            if(record_id == comment.rid) {
                dataAboutComments.push(comment);
            }
        });
        postsMain.innerHTML += postsTemplate(posted_for_id, posted_by_id, posted_by_name, date_added, type, JSON.stringify(data), dataAboutComments, dataAboutComments.length, record_id);
    });
    Array.prototype.forEach.call(document.getElementsByClassName("post"), (postBlock) => {
        visibilityAndReadMore(postBlock);
        sendingDataFunctionality(postBlock);
    });
}

export default function mainPosts(something, comments) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";
    document.getElementsByClassName("mainPosts")[0].style.marginTop = headerH + "px";
    document.getElementsByClassName("settings")[0].style.marginTop = headerH + "px";
    data = something;
    initData = something;
    doEveryThing(initData, comments);
    let sidebarW = document.getElementsByClassName("sidebar")[0].getBoundingClientRect().width;
    document.getElementsByClassName("post__goBack")[0].style.top = (headerH + 8) + "px";
    document.getElementsByClassName("post__goBack")[0].style.left = (sidebarW + 10) + "px";
}


