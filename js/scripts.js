function Pizza(userName, size, notes) {
  this.userName = userName;
  this.pizzaPrice = this.price();
  this.size = size;
  // this.toppings = toppings;
  this.notes = notes;
}
//user starts with small cheese pizza at $10
Pizza.prototype.price = function () {
  let baseCost = 10;
  if (this.size === "Medium") {
    baseCost += 4;
  }
  if (this.size === "Large") {
    baseCost += 8;
  }
  console.log(baseCost);
  return baseCost;
};

// function receipt(newOrder) {
//   $("#recipt").show();

//   // can I print just newOrder?
//   newOrder.userName;
//   newOrder.pizzaPrice;
//   newOrder.size;
//   newOrder.toppings;
//   newOrder.notes;
// }

$(document).ready(function () {
  $("#pizzaOrder").submit(function (event) {
    event.preventDefault();
    const userNameInput = $("#Username").val();
    console.log(userNameInput);
    let pizzaSizeInput = $("#pizzaSize").val();
    console.log(pizzaSizeInput);
    const notesInput = $("#Notes").val();
    // let toppingsInput = [];
    // $("input:checkbox[name=type]:checked")
    //   .each(function () {
    //     toppingsInput.push($(this.val()));
    //   })("#pep")("#pin")("#jal")("#mush")("#olives")
    //   .val();

    newOrder = new Pizza(userNameInput, pizzaSizeInput, notesInput);
    // receipt(newOrder);
    console.log(newOrder);
  });
});

// (form)
// Change (modifiers)

// - Size of pizza: small medium large (3) (base of 10 plus \$4+ for each to object )

// - Toppings : pepperoni, pinapple, jalapeno, mushroom, peppers (5) (each + 50 cents to object)

// (form)

// Recipt (display to user)

// - Name of user
// - size of pizza with toppings chosen,
// - price for pizza.
// - add time for pick up if possible. (20mins from time entered)
