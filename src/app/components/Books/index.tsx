import * as React from "react";

import "./index.scss";

import IBook from "../../core/models/book.model";
import IBooks from "../../core/models/books.model";

import Book from "../Book";

interface Props {
  books: IBooks;
}

const Books = (props: Props): JSX.Element => {
  const {books} = props;
  return (
    <div className="_books">
      {
        books &&
        books.totalItems > 0
          ? books.items.length > 0 && books.items.map((book: IBook) => <Book book={book} key={book.id}/>)
          : <p>books not found</p>
      }
    </div>
  );
};

export default Books;
