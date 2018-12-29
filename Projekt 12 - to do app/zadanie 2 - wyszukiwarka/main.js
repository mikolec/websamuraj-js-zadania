// FILTER (I PRZYPOMNIENIE MAP)

// Filter
/* const arr = [34, 219, 109, 2934, 12, 10, 29];

const oddNumbers = arr.filter(number => number % 2);
const evenNumbers = arr.filter(number => !(number % 2));
const numbersBiggerThen100 = arr.filter(number => number > 100);

// Map
const double = arr.map(number => number * 2);
const people = arr.map(number => number + " osób");

//forEach

arr.forEach((number, index) => arr[index] = number * 2) */

const ul = document.querySelector("ul");
const listHTML = [...document.querySelectorAll("ul li")];
const list = listHTML.map(li => li.textContent);
const inputHTML = document.querySelector("input");
inputHTML.addEventListener("input", e => {
  // console.log(e.target.value);
  let filteredList = list.filter(item => {
    return item.includes(e.target.value);
  });

  const newList = [...document.querySelectorAll("li")];
  newList.forEach(li => li.remove());

  filteredList.forEach(liText => {
    let li = document.createElement("li");
    li.textContent = liText;
    ul.appendChild(li);
  });
});
