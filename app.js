const colors = ['Red', 'Yellow', 'Blue', 'Green', 'Orange'];
const clickMe = document.getElementById("btn");
const hexCode = document.querySelector(".hex-color");

clickMe.addEventListener("click", function() {

const randomNumber = getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber];
hexCode.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}