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
let boxBtns = document.getElementsByClassName("box__btn");
let fromDate = document.getElementsByClassName("date__date")[0];
let toDate = document.getElementsByClassName("date__date")[1];
let btnReset = document.getElementsByClassName("filters__reset")[0];
let searchRecords = document.getElementsByClassName("filters__search")[0];
let searchBlockPeople = document.getElementsByClassName("people__search")[0];
let searchBarPeople = document.getElementsByClassName("people__searchBar")[0];
let chartButton = document.getElementsByClassName("header__chart")[0];
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
let receivedItems;
sidebarBlock.style.top = headerH + "px";
let dp = false;
people.style.height = "calc(100vh - " + (filterBtn.getBoundingClientRect().top + filterBtn.getBoundingClientRect().height +	 68) + "px)";
people.style.display = "none";
let initData, data, commetsData;
let startDate, endDate;
let oldestToNewestFun = (a, b) => {
    let one = new Date(a.date_added);
    let two = new Date(b.date_added)
    if(one < two) { return -1; }
    if(one > two) { return 1; }
    return 0;
}


export function sidebar(items, posts, comments) {
	 function gettingTheRaCOfPerson(input) {
		let all = document.getElementsByClassName("all")[0];
		let loaderBody = document.getElementsByClassName("loaderBody")[0];
		all.style.opacity = "0";
		all.style.pointerEvents = "none";
		loaderBody.style.display = "flex";
		let postsA, commentsA;
		getrecords("http://localhost:8080/caren/rest/getrecords/"+input).then((data) => {
			postsA = JSON.parse(data);
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
				commentsA = JSON.parse(data);
				mainPosts(postsA.sort(oldestToNewestFun), commentsA);
				statistics(postsA.sort(oldestToNewestFun));
				if(previousSet == "on") {
					statisticsBtn.click();
				}
		        initData = postsA;
	    		data = initData;
	    		startDate = ordererdDates.shift();
	    		fromDate.value = startDate;
	    		endDate = ordererdDates.pop();
	    		toDate.value = endDate;
	    		searchRecords.value = "";
	    		if(statisticsBtn.getAttribute("data-set") !== "on") {
		    		Array.prototype.forEach.call(linkForPages, (link) => {
		    		    link.setAttribute("data-state", "selected");
		    		    link.getElementsByClassName("fa-check")[0].style.display = "block";
		    		});
				}		 
	    		filterBtn.click();
			});
		});
	}
	receivedItems = items;
    fromDate.addEventListener("change", filteringDates);
    toDate.addEventListener("change", filteringDates);
	people.innerHTML = `<div class="people__err">No Results Found</div>`;
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
    let ordererdDates = posts.map((post) => post.date_added.split(" ")[0]).sort((a, b) => {
    		let one = new Date(a);
    		let two = new Date(b)
    		if(one < two) { return -1; }
    		if(one > two) { return 1; }
    		return 0;
    	}
    );
    commetsData = comments;
    initData = posts;
    data = posts;
    startDate = ordererdDates.shift();
    if(startDate){
        fromDate.value = startDate;
    }
    endDate = ordererdDates.pop();
    
    if(endDate){
    	toDate.value = endDate;
    }
    mainWithComments(posts.sort(oldestToNewestFun));
    sortingBlocks(posts);
}

export function sidebarWithPeople(input, rid){
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
			let statisticsBtn = document.getElementsByClassName("header__chart")[0];
			if(statisticsBtn.getAttribute("data-set") == "on") {
				statisticsBtn.click();
			}
			comments = JSON.parse(data);
			sidebar(receivedItems, posts, comments);
			Array.prototype.forEach.call(document.getElementsByClassName("post"), (p) => {
				if (p.getAttribute("data-id") != rid) {
					p.style.display = "none";
				}
			});
		});
	});
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
            Array.prototype.forEach.call(postBlockMain, (blockPost) => {
            	let currDate = new Date(blockPost.getElementsByClassName("post__date")[0].innerHTML.split(" ")[0]);
                let fromDateObj = new Date(fromDate.value);
                let toDateObj = new Date(toDate.value);
                let currSearch = document.getElementsByClassName("filters__search")[0].value.toLowerCase();
                let currPerson = blockPost.getElementsByClassName("post__uploader")[0].innerHTML.toLowerCase();
                let currText = blockPost.getElementsByClassName("content")[0].innerHTML.toLowerCase();
                let bool1 = currSearch.includes(currPerson) || currPerson.includes(currSearch);
                let bool2 = currSearch.includes(currText) || currText.includes(currSearch);
            	if(!(currDate >= fromDateObj && currDate <= toDateObj && (bool1 || bool2))) {
            		blockPost.style.display = "none";
            	}
            });
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
		chartButton.style.color = "purple";
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
    let postBlockMain = document.getElementsByClassName("post");
    Array.prototype.forEach.call(postBlockMain, (blockPost) => {
    	let isType = true;
        Array.prototype.forEach.call(linkForPages, (linkForAPage) => {
        	if(linkForAPage.getAttribute("data-link") == blockPost.getAttribute("data-link")) {
        		if(linkForAPage.getAttribute("data-state") !== "selected") {
            		isType =  false;
        		}
        	}
        });
        let currSearch = document.getElementsByClassName("filters__search")[0].value.toLowerCase();
        let currPerson = blockPost.getElementsByClassName("post__uploader")[0].innerHTML.toLowerCase();
        let currText = blockPost.getElementsByClassName("content")[0].innerHTML.toLowerCase();
        let bool1 = currSearch.includes(currPerson) || currPerson.includes(currSearch);
        let bool2 = currSearch.includes(currText) || currText.includes(currSearch);
    	if(!(isType && (bool1 || bool2))) {
    		blockPost.style.display = "none";
    	}
    });
    let people = 0;
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

searchRecords.addEventListener("keyup", () => {
    let curr = searchRecords.value.toLowerCase();
    let postsBlocks = document.getElementsByClassName("post");
    Array.prototype.forEach.call(postsBlocks, (post) => {
    	if(post.getElementsByClassName("content")[0].innerHTML.includes(`<span style="background-color:yellow;font-weight: 900;">`,"")) {
    		let oldText = post.getElementsByClassName("content")[0].innerHTML.split(`<span style="background-color:yellow;font-weight: 900;">`)[1].replace(`</span>`,"");
            post.getElementsByClassName("content")[0].innerHTML = post.getElementsByClassName("content")[0].innerHTML.split(`<span style="background-color:yellow;font-weight: 900;">`)[0] + oldText;
    	}
        post.getElementsByClassName("post__uploader")[0].innerHTML = post.getElementsByClassName("post__uploader")[0].innerHTML.replace(`<span style="background-color:yellow;font-weight: 900;">`,"").replace(`</span>`,"");
    });
    Array.prototype.forEach.call(postsBlocks, (post) => {
        let currTitle = post.getElementsByClassName("content")[0].innerHTML.toLowerCase() + post.getElementsByClassName("post__uploader")[0].innerHTML.toLowerCase();
        let reportType = post.getElementsByClassName("post__text")[0].getElementsByTagName("div")[0].className.split("-")[1];
        currTitle += reportType;
        let currDate = new Date(post.getElementsByClassName("post__date")[0].innerHTML.split(" ")[0]);
        let fromDateObj = new Date(fromDate.value);
        let toDateObj = new Date(toDate.value);
        let isType = true;
        Array.prototype.forEach.call(linkForPages, (linkForAPage) => {
        	if(linkForAPage.getAttribute("data-link") == post.getAttribute("data-link")) {
        		if(linkForAPage.getAttribute("data-state") !== "selected") {
            		isType =  false;
        		}
        	}
        });
        if(currDate >=  fromDateObj && currDate <= toDateObj && isType) {
        	if(!(currTitle.includes(curr) || curr.includes(currTitle)) ) {
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
            }
        } else {
        	post.style.display = "none";
        }
    });
    let atLeastOneDp = false;
    Array.prototype.forEach.call(postsBlocks, (postToBeFiltered) => {
    	if(postToBeFiltered.style.display == "flex") {
    		atLeastOneDp = true;
    	}
    });
    let errBlock = document.getElementsByClassName("post__err")[0];
    if(atLeastOneDp) {
        errBlock.style.display = "none";
    } else {
        errBlock.style.display = "block";
    }
});

btnReset.addEventListener("click", () => {
    let ordererdDates = initData.map((post) => {
        let {date_added} = post;
        return date_added.split(" ")[0];
    }).sort(oldestToNewestFun);
    data = initData;

    startDate = ordererdDates.shift();
    fromDate.value = startDate;
    endDate = ordererdDates.pop();
    toDate.value = endDate;
    searchRecords.value = "";
    Array.prototype.forEach.call(linkForPages, (link) => {
        link.setAttribute("data-state", "selected");
        link.getElementsByClassName("fa-check")[0].style.display = "block";
    })
    mainWithComments(initData.sort(oldestToNewestFun));
});

