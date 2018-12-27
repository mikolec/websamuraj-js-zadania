// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const imgs = document.querySelectorAll(".select img");
const btnStart = document.querySelector("button.start");
const results = document.querySelectorAll(".panel-left span");

const options = []; //będzie pobrane z dataset
let playerOption = "";
let computerOption = "";

let gamesCounter = 0;
let winsCounter = 0;
let lossesCounter = 0;
let drawCounter = 0;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const removeSelection = () => {
  playerOption = "";
  for (let img of imgs) {
    img.style.boxShadow = "";
  }
}

const selectImg = (e) => {
  removeSelection();
  e.target.style.boxShadow = "yellow 0 0 0 4px";
  playerOption = e.target.dataset.option;
}

for (let img of imgs) {
  options.push(img.dataset.option);
  img.addEventListener("click", selectImg);
}

const getResults = () => {
  let gameResult = 0; // -1 = przegrana, 0 = remis, 1 - wygrana
  switch (computerOption) {
    case "papier":
      switch (playerOption) {
        case "nożyczki":
          gameResult = 1;
          break;
        case "papier":
          gameResult = 0;
          break;
        case "kamień":
          gameResult = -1;
          break;
      }
      break;
    case "kamień":
      switch (playerOption) {
        case "nożyczki":
          gameResult = -1;
          break;
        case "papier":
          gameResult = 1;
          break;
        case "kamień":
          gameResult = 0;
          break;
      }
      break;
    case "nożyczki":
      switch (playerOption) {
        case "nożyczki":
          gameResult = 0;
          break;
        case "papier":
          gameResult = -1;
          break;
        case "kamień":
          gameResult = 1;
          break;
      }
      break;
  }
  return gameResult;

}

const getWinner = (result) => {
  let winner = "";
  switch (result) {
    case -1:
      winner = "komputer";
      lossesCounter++;
      break;
    case 0:
      winner = "remis";
      drawCounter++;
      break;
    case 1:
      winner = "gracz";
      winsCounter++;
      break;
  }
  return winner;
}

const showResults = () => {
  document.querySelector(".numbers span").textContent = gamesCounter;
  document.querySelector(".wins span").textContent = winsCounter;
  document.querySelector(".losses span").textContent = lossesCounter;
  document.querySelector(".draws span").textContent = drawCounter;
}

const playGame = () => {
  if (playerOption.length) {
    gamesCounter++;
    computerOption = options[randomInt(0, options.length - 1)];

    // const results = document.querySelectorAll(".panel-left span");
    for (let result of results) {

      switch (result.dataset.summary) {
        case "your-choice":
          result.textContent = playerOption;
          break;
        case "ai-choice":
          result.textContent = computerOption;
          break;
        case "who-win":
          result.textContent = getWinner(getResults());
          break;
      }
    }
    showResults();
  } else {
    alert("Proszę wybrać zdjęcie!");
  }
}
btnStart.addEventListener("click", playGame);