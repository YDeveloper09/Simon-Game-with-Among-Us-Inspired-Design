let randomArray = [];
let userClick = [];
const buttons = document.querySelectorAll("button");
// let level = document.querySelector(".lvl");
const header = document.querySelector(".header");
const level = document.createElement("h2");


let generateRandomNumber = () => randomNumber = Math.round(Math.random() * 8);


function getRandomArray () {
    randomArray.push(generateRandomNumber());
    animateButton();
}

function animateButton () {
    let lastElement = randomArray[randomArray.length - 1]
            buttons[lastElement].style.backgroundColor = "white";
}

function changeBgColor () {
    let lastElement = randomArray[randomArray.length - 1]
        buttons[lastElement].style.backgroundColor = "";
};

let i = 1

function validateArray () {
    if (randomArray.toString() === userClick.toString()){
      level.className = "lvl";
      level.innerText = "Level";
      header.insertAdjacentElement("beforeend",level);
      level.innerText = "Level " + `${(i +=1)}`;
      timeOut();
      userClick=[];
    }else{
        level.innerText = "Uh oh, Game Over!";
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}

function timeOut () {
    setTimeout(() => {
        getRandomArray();
        setTimeout(changeBgColor, 250);
    }, 1000);
}


buttons.forEach(button => {
    button.value = button.innerText;
    button.addEventListener("click", () => {
        userClick.push(button.innerText);
        // button.style.backgroundColor = "red"
        if (userClick.length === randomArray.length) {
        validateArray();
        }
    })
});

timeOut();



