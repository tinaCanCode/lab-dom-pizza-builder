// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(shroom => {
    if (state.mushrooms) {
      shroom.style.visibility = 'visible';
    } else {
      shroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperoni) {
    document.querySelector(".btn.btn-pepperoni").classList.add('active')
  } else {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active")
  }

  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add('active')
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active")
  }

  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add('active')
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active")
  }

  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add('active')
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active")
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add('active')
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  //add pepperoni line item
  let liPepperoni = document.createElement("li")
  liPepperoni.innerText = "$" + ingredients.pepperoni.price + " " + ingredients.pepperoni.name
  liPepperoni.setAttribute("id", "pepperoni-li")
  console.log(liPepperoni)
  
  if (state.pepperoni && !document.getElementById("pepperoni-li")) {
   document.querySelector("aside>ul").append(liPepperoni)
  } else if (!state.pepperoni && document.getElementById("pepperoni-li")) {
    document.getElementById("pepperoni-li").remove()
  }

  //add mushrooms line item
  let liMushrooms = document.createElement("li")
  liMushrooms.innerText = "$" + ingredients.mushrooms.price + " " + ingredients.mushrooms.name
  liMushrooms.setAttribute("id", "mushroom-li")
  console.log(liMushrooms)
  
  if (state.mushrooms && !document.getElementById("mushroom-li")) {
   document.querySelector("aside>ul").append(liMushrooms)
  } else if (!state.mushrooms && document.getElementById("mushroom-li")) {
    document.getElementById("mushroom-li").remove()
  }

  //add green peppers line item
  let liGreenPeppers = document.createElement("li")
  liGreenPeppers.innerText = "$" + ingredients.greenPeppers.price + " " + ingredients.greenPeppers.name
  liGreenPeppers.setAttribute("id", "green-peppers-li")
  console.log(liGreenPeppers)
  
  if (state.greenPeppers && !document.getElementById("green-peppers-li")) {
   document.querySelector("aside>ul").append(liGreenPeppers)
  } else if (!state.greenPeppers && document.getElementById("green-peppers-li")) {
    document.getElementById("green-peppers-li").remove()
  }

  //add white sauce line item
  let liWhiteSauce = document.createElement("li")
  liWhiteSauce.innerText = "$" + ingredients.whiteSauce.price + " " + ingredients.whiteSauce.name
  liWhiteSauce.setAttribute("id", "white-sauce-li")
  console.log(liWhiteSauce)
  
  if (state.whiteSauce && !document.getElementById("white-sauce-li")) {
   document.querySelector("aside>ul").append(liWhiteSauce)
  } else if (!state.whiteSauce && document.getElementById("white-sauce-li")) {
    document.getElementById("white-sauce-li").remove()
  }

  //add gluten free crust
  let liCrust = document.createElement("li")
  liCrust.innerText = "$" + ingredients.glutenFreeCrust.price + " " + ingredients.glutenFreeCrust.name
  liCrust.setAttribute("id", "crust-li")
  console.log(liCrust)
  
  if (state.glutenFreeCrust && !document.getElementById("crust-li")) {
   document.querySelector("aside>ul").append(liCrust)
  } else if (!state.glutenFreeCrust && document.getElementById("crust-li")) {
    document.getElementById("crust-li").remove()
  }

  let totalPrice = basePrice;
  btnPrice = [ingredients.pepperoni.price, ingredients.mushrooms.price, ingredients.greenPeppers.price, ingredients.whiteSauce.price, ingredients.glutenFreeCrust.price];
  const btns = document.querySelectorAll(".btn");

  for (let i = 0; i<btns.length; i++) {
    if (btns[i].classList.contains("active")) {
      totalPrice = totalPrice + btnPrice[i]
    }
  };

  document.querySelector("strong").innerText = "$" + totalPrice

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  console.log("Pepperoni was clicked");
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  console.log("Mushrooms was clicked");
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  console.log("White Sauce was clicked")
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  console.log("Crust was clicked")
  renderEverything();
});