const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sapiente nobis, iusto alias inventore commodi sunt optio amet eum vel harum eligendi quisquam dolore quidem! Magnam nemo sequi fuga deserunt.";

//Parametry
const time = 40;
let indexText = 0;

//Implementacja
const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};

//funkcja setInterval - zwraca swój numer, czyli identyfikator, pozwalający ją odwołać/zatrzymać
const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);
