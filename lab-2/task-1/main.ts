import {Animal} from "./common/animal";
import {Cat} from "./animals/cat";
import {Bird} from "./animals/bird";
import {Fish} from "./animals/fish";

const foods: string[] = [
    "Apple",
    "Banana",
    "Carrot",
    "Steak",
    "Salmon",
    "Rice",
    "Pasta",
    "Bread",
    "Cheese",
    "Yogurt"
];


const animals: Animal[] = [];
const cat1 = new Cat(3, "Mammalia", "Eukaryota", "Felidae", "Felis", true,
    "Animalia", "Whiskers", "Carnivora", "Chordata", "Felis catus", null);
const cat2 = new Cat(5, "Mammalia", "Eukaryota", "Felidae", "Felis", true,
    "Animalia", "Shadow", "Carnivora", "Chordata", "Felis catus", null);
const bird1 = new Bird(2, "Aves", "Eukaryota", "Psittacidae", "Ara", false,
    "Animalia", "Blue", "Psittaciformes", "Chordata", "Ara ararauna", null);
const bird2 = new Bird(4, "Aves", "Eukaryota", "Accipitridae", "Aquila", false,
    "Animalia", "Eagle", "Accipitriformes", "Chordata", "Aquila chrysaetos", null);
const fish1 = new Fish(1, "Actinopterygii", "Eukaryota", "Cyprinidae", "Carassius",
    false, "Animalia", "Goldfish", "Cypriniformes", "Chordata", "Carassius auratus", null);
const fish2 = new Fish(3, "Chondrichthyes", "Eukaryota", "Carcharhinidae", "Carcharhinus",
    false, "Animalia", "Great White Shark", "Carcharhiniformes", "Chordata", "Carcharodon carcharias", null);

animals.push(cat1, cat2, bird1, bird2, fish1, fish2);

animals.forEach(animal => {
    animal.move();
    animal.eat(foods[Math.floor(Math.random() * foods.length)]);
    animal.sleep();
    console.log(`Info about animal:`)
    console.log(animal);
});