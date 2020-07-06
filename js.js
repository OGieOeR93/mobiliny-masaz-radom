const headerImg = document.getElementById("bgcImg");
const images = [
  "img/header1.jpg",
  "img/header2.jpg",
  "img/header3.jpg",
  "img/header4.jpg",
];

let indexOfImages = 0;

const changeImge = () => {
  indexOfImages++;
  headerImg.src = images[indexOfImages];
  console.log("indexOfImages " + indexOfImages);
    console.log(images.length);

    if (indexOfImages +1 == images.length) {
    indexOfImages = -1;
  }
};
const changeHederImg = setInterval(changeImge, 5000);
