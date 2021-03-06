function Pizza(userName, size, notes) {
    this.userName = userName;
    this.size = size;
    this.notes = notes;
    this.toppings;
    this.numberOfToppings;
    this.pizzaPrice = 0;
}
Pizza.prototype.sizeprice = function () {
    let baseCost = 10;
    let addons = this.numberOfToppings;
    console.log(addons);
    baseCost += addons;
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
    this.numberOfToppings = parseInt(
        input.length
    );
};

$(document).ready(function () {
    $("#pizzaOrder").submit(function (event) {
        event.preventDefault();
        $("#recipt").show();
        $("#pizzaOrder").hide();
        const userNameInput = $(
            "#Username"
        ).val();
        const pizzaSizeInput = $(
            "#pizzaSize"
        ).val();
        const notesInput = $("#Notes").val();

        newOrder = new Pizza(
            userNameInput,
            pizzaSizeInput,
            notesInput
        );

        let toppingsInput = [];
        $(
            "input:checkbox[name=toppins]:checked"
        ).each(function () {
            toppingsInput.push($(this).val());
        });
        newOrder.addtoppings(toppingsInput);

        $("#N").text(newOrder.userName);
        $("#s").text(newOrder.size);
        $("#t").text(newOrder.numberOfToppings);
        // $("#list").append("<li>" + newOrder.toppings + "</li>");
        $("#list").html(
            "<ul><li>" +
                newOrder.toppings.join(
                    "</li><li>"
                ) +
                "</li></ul>"
        );
        $("#I").text(newOrder.notes);
        $("#price").text(newOrder.sizeprice());
        console.log(newOrder);

        $("#orderAgain").click(function () {
            $("#pizzaOrder").trigger("reset");
            $("#recipt").hide();
            $("#pizzaOrder").show();
        });
    });
});
