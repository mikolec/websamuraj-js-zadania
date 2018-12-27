// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

//obiekt przechowujący dane o przebiegu gry
const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0
}

const game = {
  playerHand: "",
  aiHand: "",
}


const hands = [...document.querySelectorAll(".select img")];



const handSelection = function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  //this w funkcji strzałkowej wskazuje na obiekt nadrzędny - tutaj Window
  game.playerHand = e.target.dataset.option;
  console.log(game.playerHand);
  hands.forEach(hand => hand.style.boxShadow = ""); //czyścimy style.boxShadow wszystkim obrazkom
  e.target.style.boxShadow = "red 0 0 0 4px";
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const aiChoice = () => hands[randomInt(0, 2)].dataset.option;

const checkResult = function (player, ai) {
  if (player === ai) {
    return "draw";
  } else if (
    player === "papier" && ai === "kamień" ||
    player === "kamień" && ai === "nożyczki" ||
    player === "nożyczki" && ai === "papier"
  ) {
    return "win";
  } else {
    return "loss";
  }
}

const publishResult = function (player, ai, result) {

  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector(".numbers span").textContent = ++gameSummary.numbers;

  if (result === "win") {
    document.querySelector(".wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result === "loss") {
    document.querySelector(".losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent = "Komputer!";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else {
    document.querySelector(".draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "remis";
    document.querySelector('[data-summary="who-win"]').style.color = "grey";
  }

}

const endGame = function () {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
  game.playerHand = "";
  game.aiHand = "";
}

//funkcja sterująca, dbająca o to, by wszystkie procesy wykonały się po kolei
const startGame = function () {
  if (!game.playerHand) return alert("wybierz dłoń!!!");

  game.aiHand = aiChoice();

  const gameResult = checkResult(game.playerHand, game.aiHand);
  // console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}


hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector("button.start").addEventListener("click", startGame);