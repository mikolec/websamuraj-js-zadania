//const nowTime = new Date().getTime(); //data początkowa; getTime - wartość w milisekundach
const endTime = new Date("2019-01-25 22:34:00").getTime();
//const time = endTime - nowTime;

const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");

setInterval(() => {
  const nowTime = new Date().getTime();
  const time = endTime - nowTime;
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = Math.floor((time / 1000) % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;

  spanD.textContent = days;
  spanH.textContent = hours;
  spanM.textContent = minutes;
  spanS.textContent = seconds;
});
