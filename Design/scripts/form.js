let exclamation = `<i class="fa fa-exclamation-triangle exclamation"></i>`;

window.addEventListener('resize', form);
window.onload = form;

function form() {
	let inputs = document.getElementsByClassName("input__text");
	let labels = document.getElementsByClassName("input__label");

	 function shake(input, label) {
        let offSet = Math.ceil(window.pageYOffset + input.getBoundingClientRect().top) + 6;
        label.style.fontSize = "10px";
        label.style.backgroundColor = "#ffffff";
        label.style.top = (offSet - 14) + "px";
        label.style.zIndex = "1";
        input.value = "";
        input.style.border = "1px solid red";
        input.style.backgroundColor = "rgb(249,252,184)";
        input.style.animation = "shake 0.82s both";
        label.style.animation = "shake 0.82s both";
        setTimeout(() => {
            input.style.animation = "none";
            label.style.animation = "none";
        }, 830);
        input.value = "";
    }

    function errLogin() {
        let name;
        let password;
        if(inputs[0].value == "") {
            inputs[0].focus();
            shake(inputs[0], labels[0]);
        }
        name = inputs[0].value;
        if(inputs[1].value == "") {
            inputs[1].focus();
            shake(inputs[1], labels[1]);
        }
        password = inputs[1].value;
        if(name !== "" && password !== "") {
            if (false) {
                location.href = "www.yoursite.com";
            } else {
                inputs[0].focus();
                shake(inputs[0], labels[0]);
                shake(inputs[1], labels[1]);
            }
        }
    }

    function errSignup() {  
        let name;
        let password;
        let repeat;
        if(inputs[0].value == "") {
            inputs[0].focus();
            shake(inputs[0], labels[0]);
        }
        name = inputs[0].value;
        if(inputs[1].value == "") {
            inputs[1].focus();
            shake(inputs[1], labels[1]);
        }
        password = inputs[1].value;
        if(inputs[2].value == "") {
            inputs[2].focus();
            shake(inputs[2], labels[2]);
        }
        repeat = inputs[2].value;
        if(name !== "" && password !== "" && repeat !== "") {
            if(password == repeat) {
                if (false) {
                    location.href = "www.yoursite.com";
                } else {
                    inputs[0].focus();
                    shake(inputs[0], labels[0]);
                    shake(inputs[1], labels[1]);
                    shake(inputs[2], labels[2]);
                }
            } else {
                inputs[1].focus();
                shake(inputs[1], labels[1]);
                shake(inputs[2], labels[2]);
            }
        }
    }

    Array.prototype.forEach.call(inputs, (input, index) => {
        let label = labels[index];
        let offSet = Math.ceil(window.pageYOffset + input.getBoundingClientRect().top) + 7;
        label.style.top = offSet + "px";
        let leftOffSet = Math.ceil(input.getBoundingClientRect().left) + 5;
        label.style.left = leftOffSet + "px";
        input.addEventListener("focus", () => {
            label.style.fontSize = "10px";
            label.style.backgroundColor = "#ffffff";
            label.style.top = (offSet - 14) + "px";
            label.style.zIndex = "1";
        });
        input.addEventListener("blur", () => {
            if (input.value == "" && input.style.backgroundColor !== "rgb(249, 252, 184)") {
                label.style.fontSize = "16px";
                label.style.backgroundColor = "transperent";
                label.style.top = offSet + "px";
                label.style.zIndex = "-1";
            }
        });
    });
    inputs[0].focus();
	
}