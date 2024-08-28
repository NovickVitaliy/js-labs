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