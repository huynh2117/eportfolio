// template_kdhmmpp
// service_onekowh
// fXFi5QI0YgefuSRgB

let isModalOpen = false;
let isProject1Open = false;
let isProject2Open = false;
let isCareerOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  console.log("it worked");
  emailjs
    .sendForm(
      "service_onekowh",
      "template_kdhmmpp",
      event.target,
      "fXFi5QI0YgefuSRgB"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on huynhbrandon321@gmail.com"
      );
    });
}

function toggleModal(event) {
  event.preventDefault();
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function toggleCareer(event) {
  event.preventDefault();
  if (isCareerOpen) {
    isCareerOpen = false;
    return document.body.classList.remove("career--open");
  }
  isCareerOpen = true;
  document.body.classList += " career--open";
}

function showProject1(event) {
  event.preventDefault();

  if (isProject1Open) {
    isProject1Open = false;
    return document.body.classList.remove("project1--open");
  }
  isProject1Open = true;
  document.body.classList += " project1--open";
}

function showProject2(event) {
  event.preventDefault();

  if (isProject2Open) {
    isProject2Open = false;
    return document.body.classList.remove("project2--open");
  }
  isProject2Open = true;
  document.body.classList += " project2--open";
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}
