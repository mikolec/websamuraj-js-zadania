const slideList = [
  {
    img: "images/img1.jpg",
    text: "pierwszy tekst"
  },
  {
    img: "images/img2.jpg",
    text: "drugi tekst"
  },
  {
    img: "images/img3.jpg",
    text: "trzeci tekst"
  }
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = document.querySelectorAll(".dots span");

const time = 4000;
let active = 0;

const changeSlide = function() {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;

  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[active].classList.add("active");
};

setInterval(changeSlide, time);

// const slideList = [{
//  img: "images/img1.jpg",
//  text: 'Pierwszy tekst'
// },
// {
//  img: "images/img2.jpg",
//  text: 'Drugi tekst'
// },
// {
//  img: "images/img3.jpg",
//  text: 'Trzeci tekst'
// }];

// const image = document.querySelector('img.slider');
// const h1 = document.querySelector('h1.slider');
// // Interfejs
// const time = 3000;
// let active = 0;

// const changeSlide = () => {
//  active++;
//  if (active === slideList.length) {
//   active = 0;
//  }
//  image.src = slideList[active].img;
//  h1.textContent = slideList[active].text;

// }
// setInterval(changeSlide, time)

// // Implementacje
