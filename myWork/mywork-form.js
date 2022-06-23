document.querySelector("#form1").addEventListener("submit", validate);
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

    if (this.alder.value == "" || isNaN(this.alder.value) || this.alder.value < 18) {
        evt.preventDefault();
        error = "Skriv din alder med tal! (du skal være fyldt 18 år)"; // error message skal ha værdi
        messageField.textContent = error;
        this.alder.focus(); // sætter fokus på det felt du ikke har fyldt ind i
        return false;
    }




    if (this.email1.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst din e-mail addresse!"; // error message skal ha værdi
        messageField.textContent = error;
        this.email1.focus(); // sætter fokus på det felt du ikke har fyldt ind i
        return false;
    }



    const atpos = this.email1.value.indexOf("@"); // find placering af snabel-a (@)
    const dotpos = this.email1.value.lastIndexOf("."); // find placering af sidste punktum (.)
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email1.value.length) {
        evt.preventDefault();
        error = "Din e-mail addrese skal være gyldig (navn@mail.dk)!";
        messageField.textContent = error;
        this.email1.focus();
        return false
    }

    if (this.email2.value == "") {
        evt.preventDefault();
        error = "Gentag din e-mail adresse!!"; // error message skal ha værdi
        messageField.textContent = error;
        this.email2.focus(); // sætter fokus på det felt du ikke har fyldt ind i
        return false;
    }

    if (this.email2.value !== this.email1.value) {
        evt.preventDefault();
        error = "De to e-mail adresser skal være ens!"; // error message skal ha værdi
        messageField.textContent = error;
        this.email2.focus(); // sætter fokus på det felt du ikke har fyldt ind i
        return false;
    }

    if (this.telefon.value == "") {
        evt.preventDefault();
        error = "Skriv dit telefonnummer"; // error message skal ha værdi
        messageField.textContent = error;
        this.telefon.focus(); // sætter fokus på det felt du ikke har fyldt ind i
        return false;
    }

    if (isNaN(this.telefon.value) || this.telefon.value.length !== 8) {
        evt.preventDefault();
        error = "Dit telefonnummer skal skriver med tal, 8 cifrer!"; // error message skal ha værdi
        messageField.textContent = error;
        this.telefon.focus(); // sætter fokus på det felt du ikke har fyldt ind i
        return false;
    }


}