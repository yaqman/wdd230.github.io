const requestURL ="https://raw.githubusercontent.com/yaqman/wdd230.github.io/main/chamber/json/data.json";
const cards = document.querySelector(".grd");
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

grid.addEventListener("click", () => {
  cards.classList.add(".cards");
  cards.classList.remove("list");
});

list.addEventListener("click", showList); // example using defined function

function showList() {
	cards.classList.add("list");
	caeds.classList.remove("grid");
}

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const Business = jsonObject['directory'];
        Business.forEach(display);
    });

function display(Business){
    let card = document.createElement("section");
    let h3 = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let logo = document.createElement("img");
    let site = document.createElement("a");

    h3.textContent = `The Business: ${Business.name}`;
    address.textContent = `The Address: ${Business.address}`;
    phone.textContent = `The Phone Number: ${Business.number}`

    logo.setAttribute("src", Business.logo);
    logo.setAttribute("alt",`${Business.name} logo`);
    logo.width = 200;
    logo.height = 200;

    site.innerHTML = Business.URL;
    site.setAttribute("href", Business.URL);

    cards.appendChild(card);
    card.appendChild(h3);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);
    card.appendChild(logo);
}

getInfo();