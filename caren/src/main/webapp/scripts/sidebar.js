export default function sidebar(incoming) {
    let headerBlock = document.getElementsByClassName("header")[0];
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let people = document.getElementsByClassName("people")[0];
    let settings = document.getElementsByClassName("filters")[0];
    let filterBtn = document.getElementsByClassName("sidebar__control")[0];
    let peopleBtn = document.getElementsByClassName("sidebar__control")[1];
    let linkForPages = document.getElementsByClassName("sidebar__link");
    let headerH = headerBlock.getBoundingClientRect().height;
    let attr = ["text", "height", "weight", "blood_pressure", "other"];
    let currentpage;
	function fillPeople() {
        incoming.forEach((item) => {
            let {name, img} = item;
            people.innerHTML += 
                `<a href="${img}" class="people__container">
                    <div class="people__pic" style="background-image: url(../Pictures/profile_pics/${img});"></div>
                    <div class="people__name">${name}</div>
                </a>`
        });
    }
    sidebar.style.top = headerH + "px";
    people.style.height = (filterBtn.getBoundingClientRect().bottom) + "px";
    attr.forEach((classNameElem) => {
        document.getElementsByClassName(classNameElem)[0].style.display = "none";
    });
    document.getElementsByClassName(attr[0])[0].style.display = "block";
    Array.prototype.forEach.call(linkForPages, (link, index) => {
        let linkL = link.getAttribute("data-link");
        function on() {
            currentpage = linkL;
            link.style.backgroundColor = "rgba(66, 133, 244, 0.1)";
            link.style.color = "rgb(66, 133, 244)";
        }
        function off(linkAll) {
            linkAll.style.backgroundColor = "#fff";
            linkAll.style.color = "#444";
        }
        if(index == 0) {
            on();
        }
        link.addEventListener("click", () => {
            Array.prototype.forEach.call(linkForPages, (linkAll) => off(linkAll));
            on();
            attr.forEach((classNameElem) => {
                document.getElementsByClassName(classNameElem)[0].style.display = "none";
            });
            document.getElementsByClassName(linkL)[0].style.display = "block";
            console.log(linkL);
        });
        link.addEventListener("mouseover", () => {
            if(currentpage !== linkL) {
                link.style.backgroundColor = "#f5f5f5";
            }
        });
        link.addEventListener("mouseout", () => {
            if(currentpage !== linkL) {
                off(link);
            }
        })
    });
    fillPeople();
    people.style.display = "none";
    filterBtn.style.backgroundColor = "#fff";
    filterBtn.addEventListener("click", () => {
        people.style.display = "none";
        settings.style.display = "block";
        filterBtn.style.backgroundColor = "#fff";
        peopleBtn.style.backgroundColor = "rgb(239, 239, 239)";
    });
    peopleBtn.addEventListener("click", () => {
        people.style.display = "block";
        settings.style.display = "none";
        filterBtn.style.backgroundColor = "rgb(239, 239, 239)";
        peopleBtn.style.backgroundColor = "#fff";
    });
}