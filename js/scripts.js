function Pizza(userName, size, notes) {
  this.userName = userName;
  this.size = size;
  this.notes = notes;
  this.toppings;
  this.pizzaPrice = this.sizeprice();
  // this.addtoppingPrice = this.toppingcost();
}
//user starts with small cheese pizza at $10
Pizza.prototype.sizeprice = function () {
  let baseCost = 10;
  if (this.size === "Small") {
    baseCost += 0;
  } else if (this.size === "Medium") {
    baseCost += 4;
  } else if (this.size === "Large") {
    baseCost += 8;
  }
  return baseCost;
};

Pizza.prototype.addtoppings = function (input) {
  this.toppings = input;
};

// Pizza.prototype.toppingcost = function () {
//   let toppings = this.toppings.length;
//   toppings * 0.5;
//   console.log(toppings);
// };

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
    const pizzaSizeInput = $("#pizzaSize").val();
    const notesInput = $("#Notes").val();

    newOrder = new Pizza(userNameInput, pizzaSizeInput, notesInput);

    let toppingsInput = [];

    $("input:checkbox[name=toppins]:checked").each(function () {
      toppingsInput.push($(this).val());
    });
    console.log(toppingsInput);
    console.log(this.toppings);
    newOrder.addtoppings(toppingsInput);

    // receipt(newOrder);
    console.log(newOrder);
  });
});
