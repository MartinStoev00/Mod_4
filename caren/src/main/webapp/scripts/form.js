let inputs = document.getElementsByClassName("input__text");
let labels = document.getElementsByClassName("input__label");

window.addEventListener('resize', init);
window.onload = init;

document.getElementsByTagName("body")[0].style.overflowY = "auto";

function init() {
    Array.prototype.forEach.call(inputs, (input, index) => {
        let label = labels[index];
        let offSet = input.getBoundingClientRect().top + 7;
        let leftOffSet = input.getBoundingClientRect().left + 5;
        label.style.left = leftOffSet + "px";
        function on() {
            label.style.fontSize = "10px";
            label.style.backgroundColor = "#ffffff";
            label.style.top = (offSet - 14) + "px";
            label.style.zIndex = "1";
        }
        function off() {
            label.style.fontSize = "16px";
            label.style.backgroundColor = "transperent";
            label.style.top = offSet + "px";
            label.style.zIndex = "-1";
        }
        let optionsBlock = document.getElementsByClassName("input__options")[0];
        if(input.name == "gender") {
            let topForRect = input.getBoundingClientRect().height + input.getBoundingClientRect().top - 1;
            optionsBlock.style.top = topForRect + "px";
            optionsBlock.style.left = (leftOffSet - 5) + "px";
            optionsBlock.style.width = (input.getBoundingClientRect().width - 2) + "px"; 
            let values = document.getElementsByClassName("input__value");
            Array.prototype.forEach.call(values, (value) => {
                value.addEventListener("click", () => {
                    let gender = value.innerHTML;
                    input.value = gender.toLowerCase();
                });
            });
        }
        on();
        input.addEventListener("focus", () => {
            if(input.name == "gender") {
                optionsBlock.style.display = "block";
                input.style.borderBottom = "none";
                input.style.border = "1px solid rgb(26, 115, 232)";
                input.style.borderRadius = "4px 4px 0px 0px";
            } else {
                on();
            }
        });
        input.addEventListener("blur", () => {
            if (input.value == "" && input.style.backgroundColor !== "rgb(249, 252, 184)" && !(input.type == "date")) {
                off();
            } else {
                if(input.name == "gender") {
                    setTimeout(() => {
                        optionsBlock.style.display = "none";
                        input.style.borderRadius = "4px";
                        input.style.border = "1px solid #ccc";
                    }, 150);
                }
            }
        });
    });
}