// ! TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector(".menu-toggle-button");
const menuElement = document.querySelector(".menu");

const toggleMenu = () => {
  menuElement.classList.toggle("active");
  menuToggleButton.classList.toggle("active");
};

menuToggleButton.addEventListener("click", toggleMenu);
// REMOVE ACTIVE CLASS FROM ICON ON LINK CLICK

const removeActiveLinkClass = (e) => {
  if (e.target.classList.contains("list-link")) {
    menuElement.classList.remove("active");
    menuToggleButton.classList.remove("active");
  }
};
document.addEventListener("click", removeActiveLinkClass);
// ! TOGGLE THEM AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector(".theme-toggle-button");
const bodyElement = document.body;
const currentTheme = localStorage.getItem("darkTheme");

if (currentTheme) {
  bodyElement.classList.add("dark-theme");
}
const toggleTheme = () => {
  bodyElement.classList.toggle("dark-theme");
};

if (bodyElement.classList.contains("dark-theme")) {
  localStorage.setItem("darkTheme", "active");
} else {
  localStorage.setItem("click", "toggleTheme");
}

themeToggleButton.addEventListener("click", toggleTheme);

// ! SCROLL REVEAL

const sr = ScrollReveal({
  distance: "50px",
  duration: 1500,
  easing: `cubi-bezier(0.68, -0.55, 0.265, 1.55)`,
});

sr.reveal(`.main-title`, { origin: "left" });
sr.reveal(`.scroll-reveal-left`, { origin: `left` });

sr.reveal(`.tech-stack-item`, { interval: 250 });

sr.reveal(`.section-title, .section-subtitle-container`, {
  origin: `top`,
  interval: 250,
});

sr.reveal(`.portfolio-card`, { interval: 250 });
sr.reveal(`.form-container, .footer`, { origin: `top` });

// !Simple form validation
// contact form
const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError_contact_form");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
//console.log(form);
function validateForm3(event) {
  event.preventDefault();

  //console.log("hello");

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 3) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (validateEmail(email.value, 24) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 0) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm3);

function checkLength(value, len) {
  if (value.length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
