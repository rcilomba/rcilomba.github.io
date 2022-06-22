// JavaScript Document
//display: none; för stort img

// lav en const-variabel med de små alle billderne
const smallImg = document.querySelectorAll(".fbox img");

//lav let-variable newSrc (uden værdi)
let newSrc;

//lav en const-variabel til det store billede
const bigPicture = document.querySelector("#lightbox img");

//lav en const-variabel der indeholder masken
const mask = document.querySelector("#lightbox_mask");


//lav en for løkke
// addEventlister på hver billede i variablen 
//som lytter efter klik og kalde en funktion changeImg
for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener("click", changeImg)
}

let lightbox = document.querySelector("#lightbox");

//addEventlistener på det store billede   
//som lytter efter klik og kald funktionen hideMask_and_bigImg
bigPicture.addEventListener("click", hideMask_and_bigImg)

//function changeImg
//tag fadt i thi's src men hjælp af getAttribute
//tag fat i this's src og gem i variablen newSrc
//opdater src på det store billede til at være newSrc
//vis det store billede
//vis masken



function changeImg() {
    newSrc = this.getAttribute("src");
    bigPicture.setAttribute("src", newSrc);
    lightbox.style.display = "block";
    mask.style.display = "block";
}

//function hideMask_and_bigImg
//skjul det store billede
//skjul masken
function hideMask_and_bigImg() {
    lightbox.style.display = "none";
    mask.style.display = "none";
}