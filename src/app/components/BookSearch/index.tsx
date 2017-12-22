import * as React from "react";

interface Props {
  handleChange(event: React.FormEvent<HTMLInputElement>): void;
}

const BooksSearch = (props: Props) => {
  return (
    <div className="_books-search">
      <input onChange={props.handleChange} id="search" name="search" placeholder="Search for a book"/>
    </div>
  );
};

export default BooksSearch;
