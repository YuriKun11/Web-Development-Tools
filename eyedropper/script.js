let colorOne = document.getElementById('color-a');
let currentDirection = 'to bottom';
let outputCode = document.getElementById('code');
let customAlert = document.querySelector(".custom-alert");
let copyBtn = document.getElementById("copy");

function setDirection(value, _this) {
    let directions = document.querySelectorAll(".buttons button");
    for (let i of directions) {
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
}

function generateCode() {
    outputCode.value = `${colorOne.value};`
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `${colorOne.value}`;
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');

    customAlert.style.transform = "translateX(0)";
    setTimeout(() => {
        customAlert.style.transform = "translateX( calc( 100% + 10px ))";
    }, 2000);
  
    copyCode();
}

function copyCode() {
    code.select();
    document.execCommand("copy");
  }

generateCode();