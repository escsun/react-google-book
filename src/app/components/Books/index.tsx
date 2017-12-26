import * as React from "react";

import "./index.scss";

import Loader from "../../common/Loader";

import IBook from "../../core/models/book.model";

import Book from "../Book";

interface IProps {
  books: IBook[];
}

const Books = (props: IProps): JSX.Element => {
  return (
    <div className="books">
      {props.books.map((book: IBook) => <Book book={book} key={book.id}/>)}
    </div>
  );
};

export default Loader("books")(Books);
