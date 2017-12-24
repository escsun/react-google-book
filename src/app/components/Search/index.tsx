import * as React from "react";

import "./index.scss";

interface IProps {
  handleInput(event: React.FormEvent<HTMLInputElement>): void;
}

const Search = (props: IProps) => {
  return (
    <div className="search">
      <input
        name="search"
        className="search__input"
        placeholder="Search for a book"
        onInput={props.handleInput}
      />
    </div>
  );
};

export default Search;
