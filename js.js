/////////Change Images//////////////////

const headerImg = document.querySelector("header .background");
const images = [
  "img/header1.jpg",
  "img/header2.jpg",
  "img/header3.jpg",
  "img/header4.jpg",
];
let indexOfImages = 0;

const changeImge = () => {
  indexOfImages++;
  headerImg.style.backgroundImage = `url('${images[indexOfImages]}')`;
  if (indexOfImages + 1 == images.length) {
    indexOfImages = -1;
  }
};
const changeHederImg = setInterval(changeImge, 5000);

/////////Menu nav/////////////////////////
let actualPostion = document.documentElement.scrollTop;
const heightNav = 79;
const menuMobile = document.querySelector(".menuMobile");
//Menu samller
const changeSizeNav = () => {
  actualPostion = document.documentElement.scrollTop;
  const nav = document.querySelector("nav");
  const namMenuH1 = document.querySelector("nav .name h1");
  const namMenuH2 = document.querySelector("nav .name h2");
  const hamburger = document.getElementById("hamburger");
  const cross = document.getElementById("cross");

  if (actualPostion > 40) {
    namMenuH1.classList.add("active");
    namMenuH2.classList.add("active");
    nav.classList.add("active");
    menuMobile.classList.remove("active");
    hamburger.classList.remove("active");
    cross.classList.remove("active");
  } else if (actualPostion < 40) {
    namMenuH1.classList.remove("active");
    namMenuH2.classList.remove("active");
    nav.classList.remove("active");
    menuMobile.classList.add("active");
    hamburger.classList.add("active");
    cross.classList.add("active");
  }
};
window.addEventListener("scroll", changeSizeNav);

//Hidden menuMobile
const navLi = [...document.querySelectorAll(".menuMobile ul li")];
navLi.forEach((li) => {
  li.addEventListener("click", () => {
    hamburger.classList.toggle("menuActive");
    cross.classList.toggle("menuActive");
    menuMobile.classList.toggle("menuActive");
  });
});

//Hidden menu
const showMenu = () => {
  hamburger.classList.toggle("menuActive");
  cross.classList.toggle("menuActive");
  menuMobile.classList.toggle("menuActive");
};
hamburger.addEventListener("click", showMenu);
cross.addEventListener("click", showMenu);

//Sending to sections;
const sectionsMenu = document.querySelectorAll("ul li");
const sectionsDiv = document.querySelectorAll(".wrapper section");
const moveToSection = function () {
  let numberOfSection = this.dataset.key;
  let div = document.querySelector(`section[data-key="${numberOfSection}"]`);
  let sectionHeight = div.offsetTop;
  window.scrollTo({
    top: sectionHeight - heightNav,
    behavior: "smooth",
  });
};
sectionsMenu.forEach((section) =>
  section.addEventListener("click", moveToSection)
);

//Sending to sections by arrow
const arrowDown = document.querySelector("span.arrow");
const sectionAbout = document.querySelector("section.about");
const moveToSectionArrow = () => {
  window.scrollTo({
    top: sectionAbout.offsetTop - heightNav,
    behavior: "smooth",
  });
};
arrowDown.addEventListener("click", moveToSectionArrow);

/////////Section About/////////////////////////

const textAboutMe = document.getElementById("textAboutMe");
const spanLine = document.getElementById("line");
const sections = [...document.querySelectorAll("section h2")];
const describe =
  "aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum aaaaLorem ipsum ";
let indexLetter = 0;
let flag = false;
let indexOfSection = 0;

//Underline h2
const sectionsUnderline = () => {
  if (indexOfSection < sections.length) {
    let sectionHeight = sections[indexOfSection].offsetTop;
    if (actualPostion + 400 >= sectionHeight) {
      flag = true;
      if ((flag = true)) {
        sections[indexOfSection].classList.add("active");
        indexOfSection++;
      }
    }
  }
};

window.addEventListener("scroll", sectionsUnderline);

//Add text
const addText = () => {
  textAboutMe.textContent += describe[indexLetter];
  indexLetter++;
  if (indexLetter == describe.length) clearInterval(addTextInterval);
};
const addTextInterval = setInterval(addText, 30);

//SpanLine
const setSpanLine = () => {
  spanLine.classList.toggle("active");
};
const setSpanLineInteval = setInterval(setSpanLine, 500);

///////// Price////////////

//Calculator
let numberOfMassage = document.getElementById("number");
let spanNumberOfMassage = document.getElementById("numberChoosen");
let priceForOneMassage = document.getElementById("priceOne");
let priceForDoubleMassages = document.getElementById("priceDouble");

const discountOne = [0, 0, 10, 20, 30, 40, 50, 70, 85, 100];
const discountDouble = [0, 20, 40, 60, 100, 150, 200, 260, 320, 400];

const calculate = () => {
  let numberValue = numberOfMassage.value;
  spanNumberOfMassage.textContent = numberValue;
  priceForOneMassage.textContent =
    numberValue * 100 - discountOne[numberValue - 1];
  priceForDoubleMassages.textContent =
    numberValue * 200 - discountDouble[numberValue - 1];
};
numberOfMassage.addEventListener("input", calculate);

///////// Contact////////////
const divContact = document.querySelector("section.contact");
const cont1 = document.getElementById("contain1");
const cont2 = document.getElementById("contain2");
const arrowUp = document.querySelector("section.contact .arrowUp");
let flagArrow = true;
const contact = () => {
  if (actualPostion >= divContact.offsetTop - divContact.offsetHeight) {
    cont1.classList.add("active");
    cont2.classList.add("active");
  }
  if (
    actualPostion >= divContact.offsetTop - divContact.offsetHeight &&
    flagArrow == true
  ) {
    arrowUp.classList.add("active");
    flagArrow = false;
  }
  if (actualPostion <= divContact.offsetTop - 600) {
    arrowUp.classList.remove("active");
    flagArrow = true;
  }
};
window.addEventListener("scroll", contact);

const goUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  arrowUp.classList.remove("active");

  setTimeout(() => {
    flagArrow = true;
  }, 1000);
};
arrowUp.addEventListener("click", goUp);
