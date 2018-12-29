// http://websamuraj.pl/examples/js/projekt11/

const mainBtn = document.querySelector("button.main");
const resetBtn = document.querySelector("button.reset");
const display = document.querySelector(".time div");

let counter = 0;
let active = false;

const timer = () => {
  if (active) {
    counter++;
    // let s = Math.floor(counter / 100);
    // let ss = Math.floor(counter % 100);
    // ss = ss < 10 ? "0" + ss : ss;
    // let timeStr = `${s}.${ss}`;
    // display.textContent = timeStr;
    display.textContent = (counter / 100).toFixed(2);
    setTimeout(timer, 10);
  }
};

let timerIndex = null;

mainBtn.addEventListener("click", () => {
  if (mainBtn.textContent === "Start") {
    //timerIndex = setInterval(timer, 10);
    active = true;
    timer();
    mainBtn.textContent = "Pauza";
  } else if (mainBtn.textContent === "Pauza") {
    //clearInterval(timerIndex);
    active = false;
    mainBtn.textContent = "Start";
  }
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  mainBtn.textContent = "Start";
  display.textContent = "---";
  active = false;
});
