import * as React from "react";

import BookModel from "../../core/models/book.model";

interface Props {
  book: BookModel;
}

const Book = (props: Props): JSX.Element => {
  const {book} = props;
  return (
    <div className="_book">
      <h1>{book.volumeInfo.title}</h1>
      <p dangerouslySetInnerHTML={{__html: props.book.volumeInfo.description}}/>
    </div>
  );
};

export default Book;
