import Book from "./book.model";

interface IBooks {
  kind: string;
  totalItems: number;
  items: Book[];
}

export default IBooks;
