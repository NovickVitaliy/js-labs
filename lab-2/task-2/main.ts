import {Shape} from "./common/shape";
import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Triangle} from "./triangle";

const shapes: Shape[] = [];

shapes.push(new Circle(5));
shapes.push(new Rectangle(10, 8));
shapes.push(new Triangle(6, 8, 10));

shapes.forEach(shape => {
    shape.showInfo();
});

shapes.forEach(shape => {
    shape.scale(5);
    shape.showInfo();
})

const totalArea = shapes.map(x => x.getArea()).reduce((previousValue, currentValue) => currentValue + previousValue);
console.log(`Total area of all shapes: ${totalArea}`);
const totalPerimeters = shapes.map(x => x.getPerimeter()).reduce((previousValue, currentValue) => currentValue + previousValue);
console.log(`Total perimeter of all shapes: ${totalPerimeters}`);
