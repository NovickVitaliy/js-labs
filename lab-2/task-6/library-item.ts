export interface LibraryItem {
    name: string;
    authorName: string
    isBorrowed: boolean;

    borrow(): void;
}