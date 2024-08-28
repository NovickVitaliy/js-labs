export abstract class Car {
    private model: string;
    private price: number;
    private year: number;
    private fuelLevel: number;

    protected constructor(model: string, price: number, year: number, fuelLevel: number) {
        this.model = model;
        this.price = price;
        this.year = year;
        this.fuelLevel = fuelLevel;
    }

    public abstract showInfo(): void;
}