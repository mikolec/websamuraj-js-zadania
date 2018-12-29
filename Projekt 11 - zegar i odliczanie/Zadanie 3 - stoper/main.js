// http://websamuraj.pl/examples/js/projekt11/

const mainBtn = document.querySelector("button.main");
const resetBtn = document.querySelector("button.reset");
const display = document.querySelector(".time div");

let counter = 0;

const timer = () => {
  counter++;
  let s = Math.floor(counter / 100);
  let ss = Math.floor(counter % 100);
  ss = ss < 10 ? "0" + ss : ss;
  // console.log(s);
  let timeStr = `${s}.${ss}`;
  display.textContent = timeStr;
};

let timerIndex = null;

mainBtn.addEventListener("click", () => {
  if (mainBtn.textContent === "Start") {
    timerIndex = setInterval(timer, 10);
    mainBtn.textContent = "Pauza";
  } else if (mainBtn.textContent === "Pauza") {
    clearInterval(timerIndex);
    mainBtn.textContent = "Start";
  }
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  mainBtn.textContent = "Start";
  display.textContent = "---";
});
