// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["tekst1", "tekst2", "tekst3"];

// Implementacja
const initDelay = 7;
const outDelay = 6;

let init = initDelay;
let out = outDelay;
let letter = 0;
let word = 0;

const addLetter = () => {
  // Użyj w środku setTimeout
  if (word < txt.length) {
    if (letter < txt[word].length) {
      if (!init) {
        spnText.textContent += txt[word][letter];
        letter++;
      } else {
        init--;
      }
    } else {
      if (!out) {
        if (word < txt.length) {
          word++;
          letter = 0;
          spnText.textContent = "";
          out = outDelay;
          init = initDelay;
        }
      } else {
        out--; //opóżnienie wychodzące
      }
    }
  }
  setTimeout(addLetter, 200);
};

addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
