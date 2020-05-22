export default function main(incoming) {
    let headerBlock = document.getElementsByClassName("header")[0];
    let headerH = headerBlock.getBoundingClientRect().height;
    let mainBlock = document.getElementsByClassName("main")[0];
	function fillMain() {
        function ran(input) {
            let num = Math.ceil(Math.random()*(input - 1));
            return "folder/" + num + ".jpg";
        }
        incoming.items.forEach((item) => {
            let {name, description, img} = item;
            mainBlock.innerHTML += 
                `<a href="${img}" class="main__card">
                    <div class="main__container">
                        <div style="background-image: url(${ran(23)});" class="main__img"></div>
                        <div style="background-image: url(${img});" class="main__profile"></div>
                        <div class="main__text">
                            <p class="main__name">${name}</p>
                        </div>
                    </div>
                </a>`
        }); 
    }
    mainBlock.style.marginTop = headerH + "px";
    mainBlock.style.paddingBottom = headerH + "px";
    fillMain();
}