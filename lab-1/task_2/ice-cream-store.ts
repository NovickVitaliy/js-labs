const smallCupPrice: number = 10;
const bigCupPrice: number = 25;
const chocolatePrice: number = 5;
const caramelPrice: number = 6;
const berriesPrice: number = 10;

function getPriceForCupSize(): number {
    const cup = prompt("Choose cup size: S for small, B for big")?.toLowerCase();
    if (cup) {
        if (cup === "s") {
            return smallCupPrice;
        } else if (cup === "b") {
            return bigCupPrice;
        } else {
            throw new Error("Invalid cup size was supplied");
        }
    }

    throw new Error("Cup size must be supplied");
}

function getPriceForFillings(): number {
    let priceForFillings = 0;
    const fillings = prompt("Enter what fillings you want: CH for chocolate, CA for caramel, " +
        "BE for berries (at least 1 filling must be supplied). Supply values dividing them by space")?.split(" ").map(x => x.toLowerCase());

    if (!fillings) {
        throw new Error("Filling must be supplied");
    }

    if (fillings.length < 1) {
        throw new Error("At least one filling must be supplied");
    }

    for (let filling of fillings) {
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
    const addMarshmallow = prompt("Do you want to add marshmallow? Y for yes, N for no")?.toLowerCase();
    if (addMarshmallow) {
        if (addMarshmallow === "y") {
            return 5;
        } else if (addMarshmallow === "n") {
            return 0;
        } else {
            throw new Error("Invalid answer")
        }
    }

    throw new Error("Answer must be supplied");
}

function calculatePrice(): number {
    let price: number = 0;
    price += getPriceForCupSize();
    price += getPriceForFillings();
    price += getPriceForMarshmallow();
    return price;
}


function buyIceCream() {
    try {
        const price = calculatePrice();
        alert(`Price of the ice cream is: ${price} hryvnias`)
    } catch (err: any) {
        alert(err.message);
    }
}
