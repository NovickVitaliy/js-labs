function process(str: string, n: number = 10){
    console.log(`${str} ${n}`);
}


let firstName: string = "Vitalii";
let age: number = 19;
let isDeleted: boolean = false;

console.log(`Name: ${firstName}`);
console.log(`Age: ${age}`);
console.log(`IsDeleted: ${isDeleted}`);

const numbers: number[] = [1,2,3,4,5,6];
const strs: string[] = ["one", "two", "three", "four", "five", "six"];

console.log(`Numbers: ${numbers}`);
console.log(`Strs: ${strs}`);

process("Hello");
process("Hello again", 19);