export interface Shape {
    getArea(): number;
    getPerimeter(): number;
    showInfo(): void;
    scale(factor: number): void;
}