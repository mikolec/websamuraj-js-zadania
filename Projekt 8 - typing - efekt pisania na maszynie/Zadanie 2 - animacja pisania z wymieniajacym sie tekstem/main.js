// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["tekst1", "tekst2", "tekst3"];

// Implementacja
const startDelay = 1000;
const endDelay = 2000;
const letterDelay = 100;

let letter = -5;
let word = 0;
let initCount = 1;

const addLetter = () => {
  // Użyj w środku setTimeout

  // if (initCount !== 0)
  //   return setTimeout(() => {
  //     initCount--;
  //     addLetter();
  //   }, startDelay);

  if (letter >= 0) spnText.textContent += txt[word][letter];

  letter++;

  if (letter === txt[word].length) {
    word++;
    if (word === txt.length) return;
    return setTimeout(() => {
      letter = -5;
      spnText.textContent = "";
      // initCount = 1;
      addLetter();
    }, endDelay);
  }

  setTimeout(addLetter, letterDelay);
};

addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
