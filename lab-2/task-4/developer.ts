import {Employee} from "./employee";
import {Payable} from "./payable";

export class Developer extends Employee{
    bonusPercentage = 0.1;

    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.bonusPercentage * this.salary;
    }

    pay(): void {
        console.log("Developer is paying something...")
    }

}