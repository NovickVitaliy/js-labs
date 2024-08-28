export interface Animal {
    domain: string;
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    subfamily: string | null;
    genus: string;
    species: string | null;
    name: string;
    age: number;
    isDomestic: boolean;

    move(): void
    eat(food: string): void;
    sleep(): void;
}