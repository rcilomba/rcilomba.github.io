const arrows = document.querySelectorAll(".arrow");
const bigImage = document.querySelector("#photo img");
const thumbs = document.querySelectorAll(".thumb");
const thumbsArray = Array.from(thumbs);

let index = 1;
let newImg;

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", changeImg);
}

for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", chooseImg);
}

function changeImg() {
    if (this.getAttribute("id") === "left") { // hvis vi har klikket på venstrepilen
        if (index > thumbs.length) {
            index--;
        } else {
            index = 6;
        }

    } else { // hvis vi har klikket på højrepilen
        if (index < thumbs.length - 1) {
            index++;
        } else {
            index = 1;
        }

    }
    console.log(index);
    newImg = "images/gallery2/img" + index + ".jpg";
    bigImaage.setAttribute("src", newImg);

}

function chooseImg() {
    bigImage.setAttribute("src", this.getAttribute("src"));
    index = thumbsArray.indexOf(this) + 1;
    console.log(index);

}

document.onkeydown = function(event) {

    if (event.code === "ArrowLeft") { // der er klikket på 'venstre-pilen'
        // din kode her...
        if (index > thumbs.length) {
            index--;
        } else {
            index = 6;
        }
    } else if (event.code === "ArrowRight") { // der er klikket på højre-pilen'
        // din kode her...
        if (index < thumbs.length - 1) {
            index++;
        } else {
            index = 1;
        }
    }


    newImg = "images/gallery2/img" + index + ".jpg";
    bigImaage.setAttribute("src", newImg);
};