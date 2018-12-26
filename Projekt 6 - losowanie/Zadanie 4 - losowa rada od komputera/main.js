const input = document.querySelector("input"),
  btnAdd = document.querySelector("button.add"),
  btnClean = document.querySelector("button.clean"),
  btnShowAdvice = document.querySelector("button.showAdvice"),
  btnShowOptions = document.querySelector("button.showOptions"),
  h1 = document.querySelector("h1");

const advices = ["walcz", "przemyśl to jeszcze raz"];

const addNewAdvice = (e) => {
  e.preventDefault(); //nie wysyłaj formularza
  const value = input.value;
  if (value.length) {
    advices.push(value);
    alert(`Dodano wartość: ${value}`)
    input.value = "";
    console.log(advices);

  }
};

const cleanAdvices = (e) => {
  e.preventDefault(); //nie wysyłaj formularza

  if (advices.length) {
    advices.length = 0;
    alert(`Wyczyszczono wszystkie porady`);
  }
};

const showAdvice = (e) => {
  e.preventDefault(); //nie wysyłaj formularza

  const randomIndex = Math.floor(Math.random() * advices.length);
  h1.textContent = advices[randomIndex];
}


const showOptions = (e) => {
  e.preventDefault(); //nie wysyłaj formularza

  alert(advices);
}

btnAdd.addEventListener("click", addNewAdvice);
btnClean.addEventListener("click", cleanAdvices);
btnShowAdvice.addEventListener("click", showAdvice);
btnShowOptions.addEventListener("click", showOptions);