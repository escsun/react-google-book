import * as React from "react";

import BookSearchPage from "../../containers/BookSearchPage";

import "./index.scss";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props): JSX.Element => {
  return (
    <div className="_layout">
      <h1 className="welcome">Find a book</h1>
      <BookSearchPage />
      {props.children}
    </div>
  );
};

export default Layout;
