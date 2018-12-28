/* 
const clock = () => {
 const time = new Date();
 // console.log(time.toLocaleString());
 // console.log(time.toLocaleDateString());
 const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
 const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
 const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

 document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(clock, 1000);
 */
const clock = () => {
  const time = new Date();
  console.log(time.toLocaleString()); // wyświetla datę i czas
  console.log(time.toLocaleDateString()); //sama data
  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const hours =
    time.getHours() < 10 ? "0" + time.getHours()() : time.getHours();

  const clock = document.querySelector(".clock span");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 1000);
