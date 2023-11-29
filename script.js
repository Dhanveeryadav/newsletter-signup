const btnSubscribe = document.querySelector(".btn-subscibe");
const email = document.querySelector(".email-input");
const errContent = document.querySelector(".form-email");
const form = document.querySelector(".form");
const btnSuccess = document.querySelector(".btn-success");

const errorStyle = function (txtContent) {
  errContent.classList.remove("form-email");
  email.classList.add("error-message");
  email.classList.add("err-placeholder");
  errContent.textContent = "";
  errContent.classList.add("msg-container");
  errContent.textContent = txtContent;
};

const clearStyles = function () {
  email.classList.remove("error-message");
  email.classList.remove("err-placeholder")
  errContent.classList.remove("msg-container");
  errContent.classList.add("form-email");
};

function validEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var userEmail = email.value.trim();

  if (userEmail === "") {
    errorStyle("The field is left empty");
    setTimeout(clearStyles, 1000);
    return
  } else if (!emailRegex.test(email.value)) {
    errorStyle("valid email required");
    setTimeout(clearStyles, 1000);
    return
  }
    return true;
}

if (form) {
  btnSubscribe.addEventListener("click", (event) => {
    event.preventDefault();
    if (validEmail()) {
      const userEmail = email.value.trim();
      window.location.href = `success.html?email=${encodeURIComponent(
        userEmail
      )}`;
    } 
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const userEmail = params.get("email");

  const userMail = document.querySelector(".usr-mail");
  if (userMail) {
    userMail.textContent = userEmail;
  }
});

btnSuccess.addEventListener("click", function () {
  window.location.href = "./index.html";
  userMail.textContent = "";
});

