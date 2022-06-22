clickCounter();

function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.querySelector("#number-click").innerHTML = localStorage.clickcount;
}