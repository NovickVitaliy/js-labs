import {LibraryItem} from "./library-item";

export class Library {
    private readonly libraryItems: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.libraryItems.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.libraryItems.filter(item => item.name == name)[0];
    }

    printAvailableItems(): void {
        this.libraryItems.forEach(item => console.log(item));
    }
}