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
      {books && books.items.map((book: IBook) => <Book book={book} key={book.id}/>)}
    </div>
  );
};

export default Books;
