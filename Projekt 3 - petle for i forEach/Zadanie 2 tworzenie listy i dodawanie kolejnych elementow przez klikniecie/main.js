/**
 * - Stwórz rozwiązanie z pomocą dwóch funkcji w oparciu o strukturę w main.js Nie dodawaj nic więcej do zakresu globalnego.

- funkcja init, która będzie uruchomiona po wczytaniu strony. Jej zadaniem jest:
--- stworzyć dwa elementy
<button>Dodaj 10 elementów listy</buttn>
<ul></ul>
--- dodaj je do body
--- ustaw nasłuchiwanie na przycisk


--- funkcja createLiElements, która będzie uruchamiana po kliknięciu przycisku stworzonego przez funkcję init. Jej zadanie to:
--- tworzenie 10 elementów li i umieszczanie ich w elemencie ul
--- kazdy z 10 elementów ma mieć swój indeks (order) pczy czym kolejne 10 elementów ma być konynuacją (czilu pierwszy klik mamy 1-10, kolejny 11-20 itd)
--- każdy kolejny element il ma mieć font-size większy o 1px.

 */

let size = 10;
let orderElement = 1;

const init = () => {

    const btnAdd = document.createElement("button"),
        btnReset = document.createElement("button"),
        ul = document.createElement("ul");
    
    btnAdd.textContent = "Dodaj 10 elementów listy";
    btnReset.textContent = "Resetuj";
    document.body.appendChild(btnAdd);
    document.body.appendChild(btnReset);
    document.body.appendChild(ul);
    btnAdd.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);
}

const createLiElements = () => {
    const ul = document.querySelector("ul");
    for(let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`
        ul.appendChild(li);
    }

}

const cleanList = () => {
    document.querySelector("ul").innerHTML = "";
    // document.querySelectorAll("li").forEach((li) => {
    //     li.remove();
    // });
    size = 10;
    orderElement = 1; 
}

init()