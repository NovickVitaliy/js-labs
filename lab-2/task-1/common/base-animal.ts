import {Animal} from "./animal";

export abstract class BaseAnimal implements Animal {
    age: number;
    class: string;
    domain: string;
    family: string;
    genus: string;
    isDomestic: boolean;
    kingdom: string;
    name: string;
    order: string;
    phylum: string;
    species: string | null;
    subfamily: string | null;

    protected constructor(
        age: number,
        _class: string,
        domain: string,
        family: string,
        genus: string,
        isDomestic: boolean,
        kingdom: string,
        name: string,
        order: string,
        phylum: string,
        species: string | null,
        subfamily: string | null
    ) {
        this.age = age;
        this.class = _class;
        this.domain = domain;
        this.family = family;
        this.genus = genus;
        this.isDomestic = isDomestic;
        this.kingdom = kingdom;
        this.name = name;
        this.order = order;
        this.phylum = phylum;
        this.species = species;
        this.subfamily = subfamily;
    }

    eat(food: string): void {
        console.log(`Animal '${this.name}' of class ${this.class} is eating ${food}`);
    }

    move(): void {
        console.log(`Animal '${this.name}' of class ${this.class} is moving...`);
    }

    sleep(): void {
        console.log(`Animal '${this.name}' of class ${this.class} is sleeping...`);
    }

}