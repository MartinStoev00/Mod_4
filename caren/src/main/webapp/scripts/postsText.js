export function postsTemplate(posted_for_id, posted_by_id, posted_by_name, date_added, type, data, comments, num, record_id) {
	let commentsNum = num == 0 ? "No Comments" : (num == 1 ? "1 Comment" : `${num} Comments`);
    let returned = 
        `<div class="post" data-link="${type}" data-id="${record_id}">
            <div class="post__header">
                <div class="post__pic" style="background-image: url(../Pictures/profile_pics/${posted_by_id}.jpg);"></div>
                <div class="post__info">
                    <div class="post__uploader">${posted_by_name}</div>
                    <div class="post__date">${date_added}</div>
                </div>
            </div>
            <div class="post__text">${constructData(data.replace(/\\/g, ``), type)}</div>
            <div class="comments">
                <div class="comments__info">${commentsNum}</div>
                ${allCommentsTemplate(comments)}
                <div class="comments__urs">
                    <div class="comments__urs-pic" style="background-image: url(../Pictures/profile_pics/1.jpg);"></div>
                    <div class="comments__urs-wrapper">
    					<input class="comments__urs-input"type="text" placeholder="Write your comment">
                        <input type="text" readonly class="comments__urs-click" value="public">
                        <div class="visibility__options">
                        	<p class="visibility__select">private</p>
                        	<p class="visibility__select">personal</p>
                        </div>
                    </div>
    				<button class="comments__urs-send"><i class="fas fa-paper-plane"></i></button>
    				<button class="comments__urs-reply"><i class="fas fa-reply"></i></button>
                </div>
            </div>
        </div>`
    return returned;
}

function constructData(input, type) {
	let inputLen = input.length;
	let givenInput = input.substring(1, inputLen - 1);
	let anObj = JSON.parse(givenInput);
	let contentInfo = ``;
	switch(type) {
	case "height":
		let {value: heightValue, unit: heightUnit} = anObj;
		let dataTextHeight = "" + heightValue + heightUnit;
		contentInfo += `
				<div class="content">${dataTextHeight}</div>
				<div class="height"></div>
			`;
		break;
	case "weight":
		let {value: weightValue, unit: weightUnit} = anObj;
		let dataTextWeight = "" + weightValue + weightUnit;
		contentInfo += `
				<div class="content">${dataTextWeight}</div>
				<div class="weight"></div>
			`;
		break;
	case "text":
		let {text} = anObj;
		contentInfo += `
				<div class="content">${text}</div>
			`;
		break;
	case "blood_pressure":
		let {systolic, diastolic, unit: bloodPressureUnit} = anObj;
		let dataTextBloodPressure = "<p>S: " + systolic + " " + bloodPressureUnit + "</p><p>D: " + diastolic + " " + bloodPressureUnit + "</p>";
		contentInfo += `
				<div class="content">${dataTextBloodPressure}</div>
				<div class="blood_pressure"></div>
			`;
		break;
	case "other":
		let {value: valueOther, unit: unitOther, description: descriptionOther} = anObj;
		let valueAndUnit = "" + (valueOther == null ? "" : valueOther) + (unitOther == null ? "" : unitOther);
		contentInfo += `
			<div class="content">${descriptionOther}${valueAndUnit=="" ? "" : ":"} <span style = "color: purple;"><b>${valueAndUnit}</b></span></div>
		`;
		break;
	}
	let returned = `
		<div class="post__type-${type}">${contentInfo}
		</div>
	`;
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
    	if(comment.parentid == 0 && index !== 0) {
    		commentsText += `</div><div class="comment__thread">`;
    	}
    	commentsText += commentTemplate(comment, comment.parentid == 0 && index !== resultedComments.length - 1 && resultedComments[index + 1].parentid !== 0);
    });
    commentsText += "</div>";
    return commentsText;
}

export function commentTemplate(comment, hasReplies) {
    let {name, pid, text, date_added, parentid, visibility, cid} = comment;
    let replyButton = '<span class="comment__replyBtn" style="color: rgb(66, 133, 244); text-decoration: underline; margin-right: 7px;">Reply</span>'
    let returned;
    if (parentid != 0) {
    	returned = 
            `<div class="comment comment__response" data-cid="${cid}">
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
    	if(hasReplies) {
    		returned = 
                `<div class="comment" data-cid="${cid}">
                    <div class="comment__pic" style="background-image: url(../Pictures/profile_pics/${pid}.jpg);"></div>
                    <div class="comment__wrapper">
                        <div class="comment__text"><span style="color: purple;font-weight: 600;">${name} </span>${text}</div>
                        <div class="comment__data">
                        	<div class="comment__showReplies">Show Replies</div>
	                        <div class="comment__date">
	                        	${replyButton}
	                        	<span>${date_added}</span>
	                        	<i class="fas fa-circle" style="margin: 5px; font-size: 5px;padding:5px;"></i>
	                        	<span style="text-transform: capitalize;">${visibility}</span>
	                        </div>
                        </div>
                    </div>
                </div>`
    	} else {
    		returned = 
    		`<div class="comment" data-cid="${cid}">
	            <div class="comment__pic" style="background-image: url(../Pictures/profile_pics/${pid}.jpg);"></div>
	            <div class="comment__wrapper">
	                <div class="comment__text"><span style="color: purple;font-weight: 600;">${name} </span>${text}</div>
	                <div class="comment__date">
	                	${replyButton}
	                	<span>${date_added}</span>
	                	<i class="fas fa-circle" style="margin: 5px; font-size: 5px;padding:5px;"></i>
	                	<span style="text-transform: capitalize;">${visibility}</span>
	                </div>
	            </div>
	        </div>`
    	}
    }
    return returned;
}