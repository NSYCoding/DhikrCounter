const countElement = document.getElementById("count")
const counterElement = document.getElementById("counter");

let i = 0;
counterElement.addEventListener('click', () => {
    i++;
    countElement.innerText = i;
});