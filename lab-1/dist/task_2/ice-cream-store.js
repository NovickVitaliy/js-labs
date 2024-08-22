"use strict";
var smallCupPrice = 10;
var bigCupPrice = 25;
var chocolatePrice = 5;
var caramelPrice = 6;
var berriesPrice = 10;
function getPriceForCupSize() {
    var _a;
    var cup = (_a = prompt("Choose cup size: S for small, B for big")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (cup) {
        if (cup === "s") {
            return smallCupPrice;
        }
        else if (cup === "b") {
            return bigCupPrice;
        }
        else {
            throw new Error("Invalid cup size was supplied");
        }
    }
    throw new Error("Cup size must be supplied");
}
function getPriceForFillings() {
    var _a;
    var priceForFillings = 0;
    var fillings = (_a = prompt("Enter what fillings you want: CH for chocolate, CA for caramel, " +
        "BE for berries (at least 1 filling must be supplied). Supply values dividing them by space")) === null || _a === void 0 ? void 0 : _a.split(" ").map(function (x) { return x.toLowerCase(); });
    if (!fillings) {
        throw new Error("Filling must be supplied");
    }
    if (fillings.length < 1) {
        throw new Error("At least one filling must be supplied");
    }
    for (var _i = 0, fillings_1 = fillings; _i < fillings_1.length; _i++) {
        var filling = fillings_1[_i];
        switch (filling) {
            case "ch":
                priceForFillings += chocolatePrice;
                break;
            case "ca":
                priceForFillings += caramelPrice;
                break;
            case "be":
                priceForFillings += berriesPrice;
                break;
            default:
                throw new Error("Invalid filling was supplied");
        }
    }
    return priceForFillings;
}
function getPriceForMarshmallow() {
    var _a;
    var addMarshmallow = (_a = prompt("Do you want to add marshmallow? Y for yes, N for no")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (addMarshmallow) {
        if (addMarshmallow === "y") {
            return 5;
        }
        else if (addMarshmallow === "n") {
            return 0;
        }
        else {
            throw new Error("Invalid answer");
        }
    }
    throw new Error("Answer must be supplied");
}
function calculatePrice() {
    var price = 0;
    price += getPriceForCupSize();
    price += getPriceForFillings();
    price += getPriceForMarshmallow();
    return price;
}
function buyIceCream() {
    try {
        var price = calculatePrice();
        alert("Price of the ice cream is: ".concat(price, " hryvnias"));
    }
    catch (err) {
        alert(err.message);
    }
}
//# sourceMappingURL=ice-cream-store.js.map