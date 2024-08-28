import {Shape} from "./common/shape";

export class Rectangle implements Shape{
    private static readonly PERIMETER_MULTIPLIER = 2;
    constructor(public width: number, public length: number) {}
    getArea(): number {
        return this.width * this.length;
    }

    getPerimeter(): number {
        return Rectangle.PERIMETER_MULTIPLIER * (this.length + this.width);
    }

    showInfo(){
        const perimeter = this.getPerimeter();
        const area = this.getArea();

        console.log(`Rectangle has a perimeter of ${perimeter.toPrecision(4)} and area of ${area.toPrecision(4)}`);
    }
}