import * as React from "react";

import "./index.scss";

interface Props {
  handleChange(event: React.FormEvent<HTMLInputElement>): void;
}

const BooksSearch = (props: Props) => {
  return (
    <div className="_books-search">
      <input onChange={props.handleChange} id="search" name="search" className="input" placeholder="Search for a book"/>
    </div>
  );
};

export default BooksSearch;
