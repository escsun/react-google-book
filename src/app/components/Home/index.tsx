import * as React from "react";

import BooksPage from "../../containers/BooksPage";

import "./index.scss";

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="home__container">
        <BooksPage/>
      </div>
    </div>
  );
};

export default Home;
