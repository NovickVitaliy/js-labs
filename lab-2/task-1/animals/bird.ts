import {Animal} from "../common/animal";
import {BaseAnimal} from "../common/base-animal";

export class Bird extends BaseAnimal {
    constructor(age: number, _class: string, domain: string, family: string, genus: string, isDomestic: boolean, kingdom: string,
                name: string, order: string, phylum: string, species: string | null, subfamily: string | null) {
        super(age, _class, domain, family, genus, isDomestic, kingdom, name, order, phylum, species, subfamily);
    }
}