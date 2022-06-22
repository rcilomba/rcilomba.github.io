const xtras = document.querySelectorAll(".xtra-txt");
const buttons = document.querySelectorAll(".knap");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", showHide);
}

function showHide() {
    let txt = this.previousElementSibling;

    if (txt.style.display === "block") {
        txt.style.display = "none";
        this.textContent = "Læs mere...";
    } else {
        txt.style.display = "block";
        this.textContent = "Læs mindre...";
    }



}