function Pizza(userName, size, notes, toppings) {
  this.userName = userName;
  this.size = size;
  this.notes = notes;
  this.toppings = toppings;
  this.pizzaPrice = this.price();
}
//user starts with small cheese pizza at $10
Pizza.prototype.price = function () {
  let baseCost = 10;
  if (this.size === "Small") {
    baseCost += 0;
  } else if (this.size === "Medium") {
    baseCost += 4;
  } else if (this.size === "Large") {
    baseCost += 8;
  }
  baseCost += this.topping.length * 0.5;
  console.log(this.toppings);
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
    const pizzaSizeInput = $("#pizzaSize").val();
    console.log(pizzaSizeInput);
    const notesInput = $("#Notes").val();
    let toppingsInput = [];
    console.log(toppingsInput);
    $("input:checkbox[name=toppins]:checked").each(function () {
      toppingsInput.push($(this).val());
    });
    newOrder = new Pizza(userNameInput, pizzaSizeInput, notesInput, toppingsInput);
    // receipt(newOrder);
    console.log(newOrder);
  });
});
