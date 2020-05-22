export default function mainPosts(postsJSON) {
    let mainPosts = document.getElementsByClassName("mainPosts")[0];
    let headerBlock = document.getElementsByClassName("header")[0];
    let headerH = headerBlock.getBoundingClientRect().height;
    let postsMain = mainPosts.getElementsByClassName("posts")[0];
	 function fillPosts() {
        function display() {
            postsMain.innerHTML = ``;
            postsJSON.posts.forEach((post) => {
                let commentsText = ``;
                post.comments.forEach((comment, index) => {
                    if(index < 2) {
                        let {name, date, img, text} = comment;  
                        commentsText += 
                            `<div class="comment">
                                <div class="comment__pic" style="background-image: url(${img});"></div>
                                <div class="comment__wrapper">
                                    <div class="comment__text"><span style="color: rgb(56, 88, 152);font-weight: 600;margin-right: 15px;">${name}</span>${text}</div>
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
                    count.innerHTML = `${postsJSON.posts[i].comments.length} out of ${postsJSON.posts[i].comments.length}`;
                    postsJSON.posts[i].comments.forEach((comment) => {
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
                    count.innerHTML = `2 out of ${postsJSON.posts[i].comments.length}`;
                    postsJSON.posts[i].comments.forEach((comment, num) => {
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
            if(post.getElementsByClassName("post__text")[0]     .innerHTML.length > 400) {
                let postText = post.getElementsByClassName("post__text")[0];
                let text = postText.innerHTML;
                let charLimit = 400;
                let firstHalf = text.substring(0, charLimit);
                let secondHalf = `<span class="more" style="display:none;">${text.substring(charLimit, text.length)}</span>`;
                let returnedText = firstHalf + secondHalf + readMore;
                postText.innerHTML = returnedText;
            }
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