import {Shape} from "./common/shape";

export class Triangle implements Shape{
    constructor(public ab: number, public bc: number, public ac: number) {
        this.validateTriangle(ab, bc, ac);
    }

    private validateTriangle(ab: number, bc: number, ac: number) {
        if(ab + bc <= ac || ab + ac <= bc || bc + ac <= ab){
            throw new Error("Invalid triangle");
        }
    }
    getArea(): number {
        const p = this.getPerimeter();
        return Math.sqrt(p * (p - this.ab) * (p - this.bc) * (p - this.ac));
    }

    getPerimeter(): number {
        return this.ab + this.bc + this.ac;
    }

    showInfo(){
        const perimeter = this.getPerimeter();
        const area = this.getArea();

        console.log(`Triangle has a perimeter of ${perimeter.toPrecision(4)} and area of ${area.toPrecision(4)}`);
    }

    scale(factor: number): void {
        this.ab *= factor;
        this.bc *= factor;
        this.ac *= factor;
    }
}