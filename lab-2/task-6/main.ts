import {Library} from "./library";
import {Book} from "./book";
import {Dvd} from "./dvd";
import {Magazine} from "./magazine";

const library = new Library();
library.addItem(new Book("vitalii", ".net development", 999));
library.addItem(new Dvd("i dont know", "music 90`s", 50));
library.addItem(new Magazine("spider man", "avengers assemble", 1));

library.printAvailableItems();

let item = library.findItemByName(".net development");
if(item){
    console.log(`Item '${item.name}' was found`);
}

item?.borrow();
console.log('item after borrowing');
console.log(item);

item = library.findItemByName("non existent");
if(!item){
    console.log(`Item 'non existent' was not found`);
}