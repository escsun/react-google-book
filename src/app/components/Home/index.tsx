import * as React from "react";

import "./index.scss";

import BooksPage from "../../containers/BooksPage";

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <BooksPage/>
    </div>
  );
};

export default Home;
