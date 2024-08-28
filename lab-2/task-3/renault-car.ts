import {Car} from "./car";

export class RenaultCar extends Car {
    private readonly _rLinkVersion: string;
    private readonly _has4Control: boolean;

    constructor(model: string, price: number, year: number, fuelLevel: number, rLinkVersion: string, has4Control: boolean) {
        super(model, price, year, fuelLevel);
        this._rLinkVersion = rLinkVersion;
        this._has4Control = has4Control;
    }

    showInfo() {
        console.log("Renault: ");
        console.log(this);
    }


    public get has4Control(): boolean {
        return this._has4Control;
    }


    public get rLinkVersion(): string {
        return this._rLinkVersion;
    }
}