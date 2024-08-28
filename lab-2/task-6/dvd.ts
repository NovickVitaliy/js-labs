import {LibraryItem} from "./library-item";

export class Dvd implements LibraryItem {
    authorName: string;
    isBorrowed: boolean = false;
    name: string;
    durationInMinutes: number;

    constructor(authorName: string, name: string, durationInMinutes: number) {
        this.authorName = authorName;
        this.name = name;
        this.durationInMinutes = durationInMinutes;
    }

    borrow(): void {
        this.isBorrowed = !this.isBorrowed;
    }

}