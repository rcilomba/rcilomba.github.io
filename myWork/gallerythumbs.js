const bigImg = document.querySelector("#lrg-photo");
const gallery = document.querySelector(".photogallery");


gallery.addEventListener("click", changePic);

function changePic(e) {
    if (e.target.getAttribute("src") != null) {
        bigImg.setAttribute("src", e.target.getAttribute("src"));

    }
}