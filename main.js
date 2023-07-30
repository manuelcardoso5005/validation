const btnSend = document.querySelector(".button");
const errorMsm = document.querySelector(".errorMessage");
const inputBorder = document.querySelector(".input-email");
const imageError = document.querySelector(".errorimage");

btnSend.addEventListener("click", function (){

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.querySelector("#email").value;

    if (emailRegex.test(email)){
        errorMsm.textContent = "";
        inputBorder.style.border = "1px solid #ce9797"
        imageError.style.display = "none";
    }
    else {
        errorMsm.textContent = "Please provide a valid e-mail";
        inputBorder.style.border = "1px solid #f96262"
        imageError.style.display = "block";
    }

})
