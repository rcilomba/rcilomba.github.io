document.querySelector("#form2").addEventListener("submit", validate);
const messageField = document.querySelector("#besked"); // p tag som visar felmeddelande i formularet

function validate(evt) {
    // en tom variabel til felmeddelanden
    let error; // kun fejl når man kommer ind i functionen


    // test om navn er udfyldt
    if (this.navn.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst dit fulde navn!"; // error message skal ha værdi
        messageField.textContent = error;
        this.navn.focus(); // sætter fokus på det felt du ikke har fyldt ind i
        return false;
    }

    if (this.email2.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst din e-mail addresse!"; // error message skal ha værdi
        messageField.textContent = error;
        this.email2.focus(); // sætter fokus på det felt du ikke har fyldt ind i
        return false;
    }



    const atpos = this.email2.value.indexOf("@"); // find placering af snabel-a (@)
    const dotpos = this.email2.value.lastIndexOf("."); // find placering af sidste punktum (.)
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email2.value.length) {
        evt.preventDefault();
        error = "Din e-mail addrese skal være gyldig (navn@mail.dk)!";
        messageField.textContent = error;
        this.email2.focus();
        return false
    }


}

// form