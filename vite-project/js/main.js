import '../css/style.css'
let mode = "light";
const body = document.querySelector("body");
const toggleButton = document.getElementById("toggle-mode");
const priceFilter = document.getElementById("price-filter");
const ageFilter = document.getElementById("age-filter");
const ratingFilter = document.getElementById("rating-filter");
const descriptionButton = document.getElementById("description-cards")
const toyCards = document.getElementById('card-container');

import { toyStoreInventory } from './toys';
console.log(toyStoreInventory);

function createToyCard(toy){
  const toyData = `
<div class="toy-card">
<h3>${toy.name}</h3>
<h4>$ ${toy.price}</h>
<p><img src="./images/${toy.image}"/></p>
<p>${toy.description}</p>
<p>Age Group: ${toy.ageGroup}+</p>
<p>Rating: ${toy.rating}</p>
<p>Brand: ${toy.brand}</p>
<p>Category: ${toy.category}</p>
</div>`
toyCards.insertAdjacentHTML('beforeend', toyData);
}
function displaytoys(toys){
  toyCards.textContent = ``;
  toys.forEach(createToyCard);
}
displaytoys(toyStoreInventory);

toggleButton.addEventListener('click', () => {
  body.classList.toggle("dark");
  if (mode === "light"){
    mode = "dark";
    toggleButton.textContent = "Change to light mode."
  }else{
    mode = "light";
    toggleButton.textContent = "Change to dark mode."
  }
})
function applyFilter(event, filteredArray){
const isActive = event.target.dataset.active === "true";
  if (isActive === true) {
    displaytoys(toyStoreInventory)
    event.target.dataset.active = "false";
  }else{
    displaytoys(filteredArray)
    event.target.dataset.active = "true";
  }  
};

const descriptionCards = toyStoreInventory.map((toy) => ({
  name: toy.name,
  image: toy.image,
  description: toy.description,
}));
function createDescs(toy){
const carddescriptions = `<div class="toy-card">
<h3>${toy.name}</h3>
<p><img src="./images/${toy.image}"/></p>
<p>${toy.description}</p>
</div>`
toyCards.insertAdjacentHTML('beforeend', carddescriptions);
}
descriptionButton.addEventListener('click', function() {
displaydescs(descriptionCards);

});
function displaydescs(toys){
  toyCards.textContent = ``;
  toys.forEach(createDescs);
}

let pageSimplification = false;
descriptionButton.addEventListener('click', function () {
  if (pageSimplification) {
    pageSimplification = false;
    displaytoys(toyStoreInventory);
    descriptionButton.textContent = "Simplify the page."
  }else{
    pageSimplification = true;
    displaydescs(descriptionCards);
    descriptionButton.textContent = "Show all information."
  }
  
});



let categoryButtons = document.querySelectorAll('.category-filter');
categoryButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const category = event.target.textContent;
    const filteredToys = toyStoreInventory.filter((toy) => toy.category === category)
    applyFilter(event, filteredToys)
  });
});

const filteredPrices = toyStoreInventory.filter((toy) => toy.price <= 50.00);
priceFilter.addEventListener('click', (event) => {
  applyFilter(event, filteredPrices);
});
const filteredAges = toyStoreInventory.filter((toy) => toy.ageGroup >= 8);
ageFilter.addEventListener('click', (event) => {
  applyFilter(event, filteredAges);
});
const filteredRatings = toyStoreInventory.filter((toy) => toy.rating >= 4.7);
ratingFilter.addEventListener('click', (event) => {
  applyFilter(event, filteredRatings);
});
