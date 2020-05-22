export default function sidebar(incoming) {
    let headerBlock = document.getElementsByClassName("header")[0];
    let headerH = headerBlock.getBoundingClientRect().height;
    let sidebar = document.getElementsByClassName("sidebar")[0];
	 function fillPeople() {
        let people = document.getElementsByClassName("people")[0];
        incoming.items.forEach((item) => {
            let {name, img} = item;
            people.innerHTML += 
                `<a href="${img}" class="people__container">
                    <div class="people__pic" style="background-image: url(${img});"></div>
                    <div class="people__name">${name}</div>
                </a>`
        });
    }
    let currentpage;
    sidebar.style.top = headerH + "px";
    let sbc = document.getElementsByClassName("sidebar__content")[0];
    let t = sbc.getBoundingClientRect().top + sbc.getBoundingClientRect().height;
    document.getElementsByClassName("people")[0].style.top = "calc(5vh + " + t + "px)";
    let linkForPages = document.getElementsByClassName("sidebar__link");
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
}