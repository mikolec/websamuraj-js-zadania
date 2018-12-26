const input = document.querySelector("input"),
  btnAdd = document.querySelector("button.add"),
  btnClean = document.querySelector("button.clean"),
  btnShowOption = document.querySelector("button.showAdvice"),
  btnShowOptions = document.querySelector("button.showOptions"),
  h1 = document.querySelector("h1");

const options = ["walcz", "przemyśl to jeszcze raz"];

const addNewOption = (e) => {
  e.preventDefault(); //nie wysyłaj formularza
  const value = input.value;
  if (value.length) {
    options.push(value);
    alert(`Dodano wartość: ${value}`)
    input.value = "";
    console.log(options);

  }
};

const cleanOptions = (e) => {
  e.preventDefault(); //nie wysyłaj formularza

  if (options.length) {
    options.length = 0;
    alert(`Wyczyszczono wszystkie porady`);
    h1.textContent = "";
  }
  console.log(options);
};

const showOption = (e) => {
  e.preventDefault(); //nie wysyłaj formularza

  const randomIndex = Math.floor(Math.random() * options.length);
  h1.textContent = options[randomIndex];
}


const showOptions = (e) => {
  e.preventDefault(); //nie wysyłaj formularza

  alert(options.join(", "));
}

btnAdd.addEventListener("click", addNewOption);
btnClean.addEventListener("click", cleanOptions);
btnShowOption.addEventListener("click", showOption);
btnShowOptions.addEventListener("click", showOptions);