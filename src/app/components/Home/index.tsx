import * as React from "react";

import BookSearchPage from "../../containers/BookSearchPage";
import BooksPage from "../../containers/BooksPage";

import "./index.scss";

const Home = (): JSX.Element => {
  return (
    <div className="_home">
      <div className="container">
        <h1>Template for Home component.</h1>
        <BookSearchPage/>
        <BooksPage/>
      </div>
    </div>
  );
};

export default Home;
