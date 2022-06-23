const prev = document.querySelector("#back").addEventListener("click", skift);

const next = document.querySelector("#next").addEventListener("click", skift);

const slides = document.querySelectorAll(".slide");

const caption = document.querySelector(".caption");



let currant = 0;

captionText = slides[currant].getAttribute("alt");

caption.textContent = captionText;



function skift() {

    slides[currant].classList.remove("slide--active", "left", "right");

    if (this.getAttribute("id") === "next") {

        currant++;

        if (currant === slides.length) {

            currant = 0;

        }

        slides[currant].classList.add("slide--active", "left");

    } else {

        currant--;

        if (currant < 0) { //hvis currant bliver -1 (under 0)...

            currant = (slides.length - 1); //antallet af img tags med class slide fratrukket 1, så vi går til det sidste billede i rækken.



        }

        slides[currant].classList.add("slide--active", "right");

    }

    captionText = slides[currant].getAttribute("alt");

    caption.textContent = captionText;

    console.log(slides, currant);

}