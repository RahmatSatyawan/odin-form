const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input, index) => {
    if (!input.validity.valid) {
      errorMessages[index].textContent = input.validationMessage;
      errorMessages[index].className = "error-message active";
    } else {
      errorMessages[index].textContent = "";
      errorMessages[index].className = "error-message";
    }
  });
});

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.validity.valid) {
      errorMessages[index].textContent = "";
      errorMessages[index].className = "error-message";
    } else {
      if (input.validity.valueMissing) {
        errorMessages[index].textContent = "Please fill out this field.";
      } else if (input.validity.patternMismatch) {
        errorMessages[index].textContent = "Please enter a valid phone number.";
      } else if (input.validity.tooShort) {
        errorMessages[
          index
        ].textContent = `Please enter at least ${input.minLength} characters.`;
      } else if (input.validity.typeMismatch) {
        errorMessages[index].textContent = "Please enter a valid phone number.";
      }
      errorMessages[index].className = "error-message active";
    }
  });
});

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password2");
const confirmPasswordError = document.getElementById("password2-error");

confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordError.textContent = "";
    confirmPasswordError.className = "error-message";
  } else {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPasswordError.className = "error-message active";
  }
});
