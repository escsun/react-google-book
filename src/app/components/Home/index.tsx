import * as React from "react";

import BookSearchPage from "../../containers/BookSearchPage";
import BooksPage from "../../containers/BooksPage";

const Home = (): JSX.Element => {
  return (
    <div className="_home">
      <h1>Template for Home component.</h1>
      <BookSearchPage />
      <BooksPage />
    </div>
  );
};

export default Home;
