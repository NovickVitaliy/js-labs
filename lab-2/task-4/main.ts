import {Employee} from "./employee";
import {Developer} from "./developer";
import {Manager} from "./manager";

const employees: Employee[] = [];
employees.push(new Developer("Vitalii", 19, 400));
employees.push(new Developer("Another Chelik", 28, 4000));
employees.push(new Developer("Old Chelik", 65, 6000));
employees.push(new Developer("Dude", 25, 1500));
employees.push(new Manager("Name1", 30, 2000));
employees.push(new Manager("Name2", 40, 2500));
employees.push(new Manager("Name3", 23, 1200));
employees.push(new Manager("Name4", 45, 700));

const totalAnnualBonuses = employees.map(x => x.getAnnualBonus())
    .reduce((previousValue, currentValue) => currentValue + previousValue);

console.log(`Total annual bonuses for all employees: ${totalAnnualBonuses} UAH`);