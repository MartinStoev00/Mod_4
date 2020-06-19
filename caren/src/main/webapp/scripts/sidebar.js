import mainPosts from "./mainPosts.js";
import getrecords from "../main.js";
import {displayGraph, statistics} from "./statistics.js";

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
let searchBlockPeople = document.getElementsByClassName("people__search")[0];
let searchBarPeople = document.getElementsByClassName("people__searchBar")[0];
let chartButton = document.getElementsByClassName("header__chart")[0];
let caret = `<i class="fas fa-caret-down"></i>`;
let chrono = "Oldest to Newest";
let revChrono = "Newest to Oldest";
let stylingRoles = ` 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
    text-transform: capitalize;
    font-size: 12px;
    color: #999;
`

sidebarBlock.style.top = headerH + "px";
let dp = false;
let filterBoxTop = filterBtns.getBoundingClientRect().top + filterBtns.getBoundingClientRect().height - 1;
filterBox.style.left = filterBtns.getBoundingClientRect().left + "px";
filterBox.style.width = (filterBtns.getBoundingClientRect().width - 2) + "px";
filterBox.style.top =  filterBoxTop + "px";
people.style.height = "calc(100vh - " + (filterBtn.getBoundingClientRect().top + filterBtn.getBoundingClientRect().height) + "px)";
people.style.display = "none";
let initData, data, commetsData;
let startDate, endDate, order = chrono;
let oldestToNewestFun = (a, b) => {
    let one = new Date(a.date_added);
    let two = new Date(b.date_added)
    if(one < two) { return -1; }
    if(one > two) { return 1; }
    return 0;
}
let newestToOldestFun = (a, b) => {
    let one = new Date(a.date_added);
    let two = new Date(b.date_added)
    if(one > two) { return -1; }
    if(one < two) { return 1; }
    return 0;
}

export default function sidebar(items, posts, comments) {
	function gettingTheRaCOfPerson(input) {
		let all = document.getElementsByClassName("all")[0];
		let loaderBody = document.getElementsByClassName("loaderBody")[0];
		all.style.opacity = "0";
		all.style.pointerEvents = "none";
		loaderBody.style.display = "flex";
		let posts, comments;
		getrecords("http://localhost:8080/caren/rest/getrecords/"+input).then((data) => {
			posts = JSON.parse(data);
			getrecords("http://localhost:8080/caren/rest/getcomments/"+input).then((data) => {
        		loaderBody.style.display="none";
        		all.style.opacity = "1";
        		all.style.pointerEvents = "auto";
				let previousSet = "off";
				let statisticsBtn = document.getElementsByClassName("header__chart")[0];
				if(statisticsBtn.getAttribute("data-set") == "on") {
					statisticsBtn.click();
					previousSet = "on";
				}
				comments = JSON.parse(data);
				mainPosts(posts.sort(oldestToNewestFun), comments);
				statistics(posts.sort(oldestToNewestFun));
				if(previousSet == "on") {
					statisticsBtn.click();
				}
		        initData = posts;
	    		data = initData;
	    		order = chrono;startDate = ordererdDates.shift();
	    		fromDate.value = startDate;
	    		endDate = ordererdDates.pop();
	    		toDate.value = endDate;
	    		boxBtns[0].innerHTML = revChrono;
	    		searchRecords.value = "";
	    		filterBtns.innerHTML = order + " " + caret;
	    		if(statisticsBtn.getAttribute("data-set") !== "on") {
		    		Array.prototype.forEach.call(linkForPages, (link) => {
		    		    link.setAttribute("data-state", "selected");
		    		    link.getElementsByClassName("fa-check")[0].style.display = "block";
		    		});
				}		        
			});
		});
	}

    fromDate.addEventListener("change", filteringDates);
    toDate.addEventListener("change", filteringDates);
	people.innerHTML = `<div class="people__err">No Results Found</div>`
    items.forEach((item) => {
        let {name, pid, aid, description} = item;
        people.innerHTML += 
            `<div data-name="${pid}" class="people__container">
                <div class="people__pic" style="background-image: url(../Pictures/profile_pics/${pid}.jpg);"></div>
                <div class="people__name"><span>${name}</span><span style ="${stylingRoles}">${description.replace("care_giver,child,neighbour,other,parent", "client").replace(/,/g,'<i class="fas fa-circle" style="margin: 5px; font-size: 5px;padding:5px;"></i>').replace("_", " ")}</span></div>  
            </div>`
    });
    let peopleiwanttoclickon = document.getElementsByClassName("people__container");
    Array.prototype.forEach.call(peopleiwanttoclickon, (person) => {
    	let idiwannagoto = person.getAttribute("data-name");
    	person.addEventListener("click", () => {
    		gettingTheRaCOfPerson(idiwannagoto);
    	});
    	
    })
    let ordererdDates = posts.map((post) => {
        let {date_added} = post;
        return date_added.split(" ")[0];
    }).sort(oldestToNewestFun);
    commetsData = comments;
    initData = posts;
    data = posts;
    startDate = ordererdDates.shift();
    fromDate.value = startDate;
    endDate = ordererdDates.pop();
    toDate.value = endDate;
    mainWithComments(posts.sort(oldestToNewestFun));
    sortingBlocks(posts);
    filteringSearch();
}

function mainWithComments(inputData) {
    mainPosts(inputData, commetsData)
}

Array.prototype.forEach.call(linkForPages, (link, index) => {
    let linkL = link.getAttribute("data-link");
    let previousState = "selected";
    function on() {
        link.setAttribute("data-state", "selected");
        previousState = "selected";
        link.getElementsByClassName("fa-check")[0].style.display = "block";
    }
    function off() {
        link.setAttribute("data-state", "deselected");
        previousState = "deselected";
        link.getElementsByClassName("fa-check")[0].style.display = "none";
    }
    function mouseOverButton() {
    	previousState = link.getAttribute("data-state");
        let newState = previousState + "Hover";
        link.setAttribute("data-state", newState);
    }
    function mouseOutButton() {
        link.setAttribute("data-state", previousState);
    }
    on();
    link.addEventListener("click", () => {
        let postBlockMain = document.getElementsByClassName("post");
        window.scrollTo(0, 0);
        if(chartButton.getAttribute("data-set") == "off") {
        	if(link.getAttribute("data-state") == "selected" || link.getAttribute("data-state") == "selectedHover") {
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
                        blockPost.style.display = "flex";
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
        } else {
        	let chartsBlock = document.getElementsByClassName("charts")[0];
        	Array.prototype.forEach.call(linkForPages, (linkForPage) => {
        		linkForPage.setAttribute("data-state", "deselected");
        		linkForPage.getElementsByTagName("i")[1].style.display = "none";
        	});
        	on();
        	Array.prototype.forEach.call(postBlockMain, (blockPost) => {
                if(blockPost.getAttribute("data-link") == linkL) {
                    blockPost.style.display = "none";
                }
            });
        	if(linkL == "text" || linkL == "other") {
        		Array.prototype.forEach.call(postBlockMain, (blockPost) => {
                    if(blockPost.getAttribute("data-link") == linkL) {
                        blockPost.style.display = "flex";
                    } else {
                        blockPost.style.display = "none";
                    }
                });
        		chartsBlock.style.display = "none";
        	} else {
        		chartsBlock.style.display = "block";
        		Array.prototype.forEach.call(postBlockMain, (blockPost) => {
        			blockPost.style.display = "none";
                });
        		displayGraph(linkL);
        	}
        }
    });
    link.addEventListener("mouseover", mouseOverButton);
    link.addEventListener("mouseout", mouseOutButton);
});

filterBtn.addEventListener("click", () => {
    filterBtn.setAttribute("data-state", "selected");
    peopleBtn.setAttribute("data-state", "deselected");
    searchBlockPeople.style.display = "none";
    people.style.display = "none";
    settings.style.display = "block";
});

filterBtn.addEventListener("mouseover", () => {
    if(filterBtn.getAttribute("data-state") == "deselected") {
        filterBtn.setAttribute("data-state", "hovered");
    }
});

filterBtn.addEventListener("mouseout", () => {
    if(peopleBtn.getAttribute("data-state") == "selected") {
        filterBtn.setAttribute("data-state", "deselected");
    }
});

peopleBtn.addEventListener("click", () => {
    filterBtn.setAttribute("data-state", "deselected");
    peopleBtn.setAttribute("data-state", "selected");
    searchBlockPeople.style.display = "block";
    people.style.display = "block";
    settings.style.display = "none";
    console.log(filterBtn.getBoundingClientRect().bottom);
});

peopleBtn.addEventListener("mouseover", () => {
    if(peopleBtn.getAttribute("data-state") == "deselected") {
        peopleBtn.setAttribute("data-state", "hovered");
    }
});

peopleBtn.addEventListener("mouseout", () => {
    if(filterBtn.getAttribute("data-state") == "selected") {
        peopleBtn.setAttribute("data-state", "deselected");
    }
});
chartButton.addEventListener("click", () => {
	let settingsToggle = document.getElementById("settingsToggle");
	let sidebarNavBlock = document.getElementsByClassName("sidebar__nav")[0];
	let chartsBlock = document.getElementsByClassName("charts")[0];
	if(chartButton.getAttribute("data-set") == "off") {
		if (settingsToggle.getAttribute("data-set") == "on") {
			settingsToggle.click();
		}
		chartButton.setAttribute("data-set", "on");
		chartButton.style.color = "red";
		peopleBtn.click();
		sidebarNavBlock.style.display = "none";
		Array.prototype.forEach.call(linkForPages, (currentPage) => {
			currentPage.setAttribute("data-state", "deselected");
			currentPage.getElementsByTagName("i")[1].style.display = "none";
		});
		linkForPages[1].setAttribute("data-state", "selected");
		linkForPages[1].getElementsByTagName("i")[1].style.display = "block";
		chartsBlock.style.display = "block";
		let postsBlocks = document.getElementsByClassName("post");
		let postErr = document.getElementsByClassName("post__err")[0];
		postErr.style.display = "none";
		Array.prototype.forEach.call(postsBlocks, (currentReport) => {
			currentReport.style.display = "none";
		});
	} else {
		chartButton.setAttribute("data-set", "off");
		chartButton.style.color = "#444";
		sidebarNavBlock.style.display = "flex";
	    people.style.display = "block";
	    settings.style.display = "block";
	    filterBtn.click();
		Array.prototype.forEach.call(linkForPages, (currentPage) => {
			currentPage.setAttribute("data-state", "selected");
			currentPage.getElementsByTagName("i")[1].style.display = "block";
		});
		chartsBlock.style.display = "none";
		btnReset.click();
	}
});

searchBarPeople.addEventListener("keyup", () => {
    let searchText = searchBarPeople.value.toLowerCase();
    Array.prototype.forEach.call(document.getElementsByClassName("people__container"), (person) => {
        let personName = person.getElementsByClassName("people__name")[0].getElementsByTagName("span")[0].innerHTML.toLowerCase();
        let personRole = person.getElementsByClassName("people__name")[0].getElementsByTagName("span")[1].innerHTML.replace(`<i class="fas fa-circle" style="margin: 5px; font-size: 5px;padding:5px;"></i>`, "").toLowerCase()
        let condition1 = searchText.includes(personName) || personName.includes(searchText);
        let condition2 = searchText.includes(personRole) || personRole.includes(searchText);
        if(!(condition1 || condition2)) {
            person.style.display = "none";
        } else {
            person.style.display = "flex";
        }
    });
    let someInThere = false;
    let peopleErr = document.getElementsByClassName("people__err")[0];
    Array.prototype.forEach.call(document.getElementsByClassName("people__container"), (person) => {
        if(person.style.display == "flex") {
            someInThere = true;
        }
    });
    if(!someInThere) {
        peopleErr.style.display = "block";
    } else {
        peopleErr.style.display = "none";
    }
});

function filteringDates() {
    startDate = fromDate.value;
    endDate = toDate.value;
    data = initData.sort((a, b) => {
        let one = new Date(a.date_added);
        let two = new Date(b.date_added);
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
        let postDate = new Date(postItem.date_added);
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
            post.getElementsByClassName("post__text")[0].innerHTML = post.getElementsByClassName("post__text")[0].innerHTML.replace(`<span style="background-color:yellow;font-weight: 900;">`,"").replace(`</span>`,"");
            post.getElementsByClassName("post__uploader")[0].innerHTML = post.getElementsByClassName("post__uploader")[0].innerHTML.replace(`<span style="background-color:yellow;font-weight: 900;">`,"").replace(`</span>`,"");
        });
        Array.prototype.forEach.call(postsBlocks, (post) => {
            let currTitle = post.getElementsByClassName("content")[0].innerHTML.toLowerCase() + post.getElementsByClassName("post__uploader")[0].innerHTML.toLowerCase();
            let reportType = post.getElementsByClassName("post__text")[0].getElementsByTagName("div")[0].className.split("-")[1];
            currTitle += reportType;
            if(!(currTitle.includes(curr) || curr.includes(currTitle))) {
                post.style.display = "none";
            } else {
                if(post.getElementsByClassName("content")[0].innerHTML.includes(curr)) {
                	post.getElementsByClassName("content")[0].innerHTML = post.getElementsByClassName("content")[0].innerHTML.replace(`${curr}`, `<span style="background-color:yellow;font-weight: 900;">${curr}</span>`);
                } else if(post.getElementsByClassName("post__uploader")[0].innerHTML.toLowerCase().includes(curr)) {
                	let original = post.getElementsByClassName("post__uploader")[0].innerHTML;
                	let firstLetters = post.getElementsByClassName("post__uploader")[0].innerHTML.toLowerCase().split(curr)[0].length;
                	let currLength = curr.length;
                	let result = original.substring(0, firstLetters);
                	result += `<span style="background-color:yellow;font-weight: 900;">`;
                	result += original.substring(firstLetters, firstLetters + currLength);
                	result += "</span>";
                	result += original.substring(firstLetters + currLength, original.length + 1);
                	post.getElementsByClassName("post__uploader")[0].innerHTML = result;
                }
                post.style.display = "flex";
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
}

boxBtns[0].addEventListener("click", () => {
    if(boxBtns[0].innerHTML.includes(chrono)) {
        order = chrono;
        boxBtns[0].innerHTML = revChrono;
        filterBtns.innerHTML = order + " " + caret;
        let newArr = data.sort(oldestToNewestFun);
        data = newArr;
        mainWithComments(data);
    } else {
        order = revChrono;
        boxBtns[0].innerHTML = chrono;
        filterBtns.innerHTML = order + " " + caret;
        let newArr = data.sort(newestToOldestFun);
        data = newArr;
        mainWithComments(data);
    }
});

btnReset.addEventListener("click", () => {
    let ordererdDates = initData.map((post) => {
        let {date_added} = post;
        return date_added.split(" ")[0];
    }).sort(oldestToNewestFun);
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
        link.setAttribute("data-state", "selected");
        link.getElementsByClassName("fa-check")[0].style.display = "block";
    })
    mainWithComments(initData.sort(oldestToNewestFun));
});

