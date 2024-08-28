import {LibraryItem} from "./library-item";

export class Book implements LibraryItem {
    authorName: string;
    isBorrowed: boolean = false;
    name: string;
    pages: number;


    constructor(authorName: string, name: string, pages: number) {
        this.authorName = authorName;
        this.name = name;
        this.pages = pages;
    }

    borrow(): void {
        this.isBorrowed = !this.isBorrowed;
    }

}