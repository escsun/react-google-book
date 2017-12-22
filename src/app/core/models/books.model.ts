import Book from "./book.model";

interface Books {
  kind: string;
  totalItems: number;
  items: Book[];
}

export default Books;
