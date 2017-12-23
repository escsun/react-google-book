import * as React from "react";

import IBook from "../../core/models/book.model";

import "./index.scss";

interface Props {
  book: IBook;
  single?: boolean;
}

const createMarkup = (html: string) => {
  return {
    __html: html
  };
};

const Book = (props: Props): JSX.Element => {
  const {book} = props;
  const {title, subtitle, authors, description} = book.volumeInfo;
  const {thumbnail, smallThumbnail} = book.volumeInfo.imageLinks;
  const desc = props.single ? createMarkup(description) : createMarkup(description.substring(0, 150) + "...");
  return (
    <div className="_book">
      <div className="container-book">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <div className="container">
          <img className="image" src={smallThumbnail}/>
          <div>
            <ul>
              {authors.map((author: string, i: number) => <li key={i}>{author}</li>)}
            </ul>
          </div>
        </div>
        <p className="description" dangerouslySetInnerHTML={desc}/>
      </div>
    </div>
  );
};

export default Book;
