const burger = document.querySelector(".burger");
const menus = document.querySelector(".menu");
const icon = document.querySelector(".burger i");

burger.addEventListener("click", switchBurgerIcon);

function switchBurgerIcon() {
    if (menus.style.display !== "flex") {
        menus.style.display = "flex";





        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        menus.style.display = "none";




        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

}