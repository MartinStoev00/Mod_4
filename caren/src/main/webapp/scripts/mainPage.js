let mainBlock = document.getElementsByClassName("main")[0];
let headerBlock = document.getElementsByClassName("header")[0];
let headerH = headerBlock.getBoundingClientRect().height;

function ran(input) {
    let num = Math.ceil(Math.random()*(input - 1));
    return "../Pictures/folder/" + num + ".jpg";
}

function fillMain(incoming) {
    incoming.forEach((item) => {
        let {name, description, img} = item;
        mainBlock.innerHTML += 
            `<a href="${img}" class="main__card">
                <div class="main__container">
                    <div style="background-image: url(${ran(23)});" class="main__img"></div>
                    <div style="background-image: url(../Pictures/profile_pics/${(Math.ceil(Math.random()*(4))) + ".jpg"});" class="main__profile"></div>
                    <div class="main__text">
                        <p class="main__name">${name}</p>
                        <p class="main__description">${description}</p>
                    </div>
                </div>
            </a>`
    }); 
}

export default function main(incoming) {
    mainBlock.style.marginTop = headerH + "px";
    mainBlock.style.paddingBottom = headerH + "px";
    fillMain(incoming);
}