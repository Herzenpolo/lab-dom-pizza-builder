// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">
    document.querySelectorAll('.mushroom').forEach(oneMushrooms => {
     state.mushrooms ? oneMushrooms.style.visibility = 'visible' : oneMushrooms.style.visibility = 'hidden'
    });
  }

// fun

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    state.greenPeppers ? oneGreenPepper.style.visibility = 'visible' : oneGreenPepper.style.visibility = 'hidden'
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    state.whiteSauce ? oneSauce.style.visibility = 'hidden' : oneSauce.style.visibility = 'visible'
  });
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    state.glutenFreeCrust ? oneCrust.style.visibility = 'hidden' : oneCrust.style.visibility = 'visible'
    
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let check1 = document.createElement("LI")
  let check2 = document.createElement("LI")
  let check3 = document.createElement("LI")
  let check4 = document.createElement("LI")
  let check5 = document.createElement("LI")

  document.querySelector("body > div.panel.controls > ul").appendChild(check1)
  document.querySelector("body > div.panel.controls > ul").appendChild(check2)
  document.querySelector("body > div.panel.controls > ul").appendChild(check3)
  document.querySelector("body > div.panel.controls > ul").appendChild(check4)
  document.querySelector("body > div.panel.controls > ul").appendChild(check5)

  let option1 = document.createElement("INPUT") //creating dropdown options
  let option2 = document.createElement("INPUT")
  let option3 = document.createElement("INPUT")
  let option4 = document.createElement("INPUT")
  let option5 = document.createElement("INPUT")

  option1.setAttribute("type", "checkbox")
  option2.setAttribute("type", "checkbox")
  option3.setAttribute("type", "checkbox")
  option4.setAttribute("type", "checkbox")
  option5.setAttribute("type", "checkbox")

  option1.setAttribute("value", "Pepperoni")

  document.querySelector("body > div.panel.controls > ul > li:nth-child(6)").appendChild(option1)
  document.querySelector("body > div.panel.controls > ul > li:nth-child(7)").appendChild(option2)
  document.querySelector("body > div.panel.controls > ul > li:nth-child(8)").appendChild(option3)
  document.querySelector("body > div.panel.controls > ul > li:nth-child(9)").appendChild(option4)
  document.querySelector("body > div.panel.controls > ul > li:nth-child(10)").appendChild(option5)

  
  option1.innerHTML = 'pepperoni' // labeling drop down
  option2.innerHTML = 'Mushrooms'
  option3.innerHTML = 'Green peppers'
  option4.innerHTML = 'White sauce'
  option5.innerHTML = 'gluten-free crust'

  document.querySelector("body > div.panel.controls > ul > li:nth-child(6) > select").addEventListener("change", () => {
    console.log(`duck pato a la naranja`)
  })
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () =>{ // adds the event listener to button
  console.log('chicken') // making sure the button works
  state.mushrooms = !state.mushrooms; // changes the state of ingredient to the opposite 
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">` 

document.querySelector("body > div.panel.controls > ul > li:nth-child(3) > button").onclick = function() {
  console.log(`Hello Puppet`)
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector("body > div.panel.controls > ul > li:nth-child(4) > button").onclick = function () {
  console.log(`the cow says moo`)
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector("body > div.panel.controls > ul > li:nth-child(5) > button").onclick = function () {
  console.log('The dog goes woof')
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}