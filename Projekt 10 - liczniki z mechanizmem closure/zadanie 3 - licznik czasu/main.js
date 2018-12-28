/*
const clock = () => {
  let counter = 0;

  const timer = () => {
    document.body.textContent = `${counter++} sekund`;
    setTimeout(timer, 1000);
  };

  return timer;
};

clock()();
*/

const clock = () => {
  let counter = 0;

  const timer = () => {
    document.body.textContent = `${counter++} sekund`;
  };

  return timer;
};

setInterval(clock(), 1000);
