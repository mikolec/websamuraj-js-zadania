const timer = () => {
  let counter = 0;

  const clock = () => {
    document.body.textContent = `${counter++} sekund`;
    setTimeout(clock, 1000);
  };

  return clock;
};

let time = timer();
time();
