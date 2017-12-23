import * as React from "react";

import BooksPage from "../../containers/BooksPage";

import "./index.scss";

const Home = (): JSX.Element => {
  return (
    <div className="_home">
      <div className="container">
        <BooksPage/>
      </div>
    </div>
  );
};

export default Home;
