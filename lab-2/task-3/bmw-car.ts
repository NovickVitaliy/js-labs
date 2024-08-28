import {Car} from "./car";

export class BmwCar extends Car {
    private readonly _iDriveVersion: string;
    private readonly _hasXDrive: boolean;

    constructor(model: string, price: number, year: number, fuelLevel: number,
                iDriveVersion: string, xDrive: boolean) {
        super(model, price, year, fuelLevel);
        this._iDriveVersion = iDriveVersion;
        this._hasXDrive = xDrive;
    }

    showInfo() {
        console.log("BMW:");
        console.log(this);
    }


    public get iDriveVersion(): string {
        return this._iDriveVersion;
    }

    public get hasXDrive(): boolean {
        return this._hasXDrive;
    }
}