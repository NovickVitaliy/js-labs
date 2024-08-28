import {Payable} from "./payable";

export abstract class Employee implements Payable{
    name: string;
    age: number;
    salary: number;
    abstract bonusPercentage: number;

    protected constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;
    abstract pay(): void;
}