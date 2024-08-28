import {Car} from "./car";

export class MercedesBenzCar extends Car {
    private readonly _mbuxVersion: string;
    private readonly _has4matic: boolean;

    constructor(model: string, price: number, year: number, fuelLevel: number,
                mbuxVersion: string, has4Matic: boolean) {
        super(model, price, year, fuelLevel);
        this._mbuxVersion = mbuxVersion;
        this._has4matic = has4Matic;
    }

    showInfo() {
        console.log("Mercedes-Benz:");
        console.log(this);
    }


    public get mbuxVersion(): string {
        return this._mbuxVersion;
    }

    public get has4matic(): boolean {
        return this._has4matic;
    }
}