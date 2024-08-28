import {LibraryItem} from "./library-item";

export class Magazine implements LibraryItem {
    authorName: string;
    isBorrowed: boolean = false;
    name: string;
    number: number;


    constructor(authorName: string, name: string, number: number) {
        this.authorName = authorName;
        this.name = name;
        this.number = number;
    }

    borrow(): void {
        this.isBorrowed = !this.isBorrowed;
    }

}