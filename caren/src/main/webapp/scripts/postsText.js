export default function postsTemplate(img, name, date, title, text, comments, num, rid) {
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
                <!--  numOfCommentsTemplate(num) was here-->
                ${allCommentsTemplate(comments)}
                <div class="comments__urs">
                    <div class="comments__urs-pic" style="background-image: url(../Pictures/profile_pics/1.jpg);"></div>
                    <div class="comments__urs-form">
                        <div class="comments__urs-wrapper">
                            <input class="comments__urs-input"type="text" placeholder="Write your comment">
                            <input type="text" readonly class="comments__urs-click" value="public">
                            <div class="visibility__options">
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

let numDisplayed = 100;

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
                
                commentsText += `<div class="comment__showReplies" onclick="joe()">Show Replies</div>`
            }
        }
    });
    commentsText += "</div>";
    return commentsText;
}

function commentTemplate(comment) {
    let {name, pid, text, date_added, parentid, visibility, cid} = comment;
    let state = parentid == 0 ? "" : "comment__response";
    let replyButton = '<span style="color: rgb(66, 133, 244); text-decoration: underline; margin-right: 15px;">Reply</span>'
    	let returned;
    if (parentid != 0) {
    	returned = 
            `<div class="comment ${state}" data-cid="${cid}">
                <div class="comment__pic" style="background-image: url(../Pictures/profile_pics/${pid}.jpg);"></div>
                <div class="comment__wrapper">
                    <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;">${name} </span>${text}</div>
                    <div class="comment__date">
                    	<span>${date_added}</span>
                    	<i class="fas fa-circle" style="margin: 5px; font-size: 5px;padding:5px;"></i>
                    	<span style="text-transform: capitalize;">${visibility}</span>
                    </div>
                </div>
            </div>`
    } else {
    	returned = 
            `<div class="comment ${state}" data-cid="${cid}">
                <div class="comment__pic" style="background-image: url(../Pictures/profile_pics/${pid}.jpg);"></div>
                <div class="comment__wrapper">
                    <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;">${name} </span>${text}</div>
                    <div class="comment__date">
                    	${replyButton}
                    	<span>${date_added}</span>
                    	<i class="fas fa-circle" style="margin: 5px; font-size: 5px;padding:5px;"></i>
                    	<span style="text-transform: capitalize;">${visibility}</span>
                    </div>
                </div>
            </div>`
    }
    return returned;
}