const hexDigits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const clickMe = document.getElementById("btn");
const hexCode = document.querySelector(".hex-color");

clickMe.addEventListener("click", function() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hexDigits[randomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    hexCode.textContent = hexColor;
});

const randomNumber = () => {
    return Math.floor(Math.random()*hexDigits.length);
}