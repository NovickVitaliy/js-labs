import {Employee} from "./employee";

export class Manager extends Employee{
    bonusPercentage: number = 0.2;

    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.bonusPercentage * this.salary;
    }

    pay(): void {
        console.log("Manager is paying something...");
    }

}