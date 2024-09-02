import {Shape} from "./common/shape";

export class Circle implements Shape {
    private static readonly PERIMETER_MULTIPLIER: number = 2;
    radius: number;

    get diameter() {
        return this.radius * 2;
    }
    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * (this.radius * this.radius);
    }

    getPerimeter(): number {
        return Circle.PERIMETER_MULTIPLIER * Math.PI * this.radius;
    }

    showInfo(){
        const perimeter = this.getPerimeter();
        const area = this.getArea();

        console.log(`Circle has a perimeter of ${perimeter.toPrecision(4)} and area of ${area.toPrecision(4)}`);
    }

    scale(factor: number): void {
        this.radius = this.radius * factor;
    }
}