import * as React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import "./index.scss";

import Home from "../Home";
import BookPage from "../../containers/BookPage";
import SearchPage from "../../containers/SearchPage";
import PageNotFound from "../PageNotFound";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <h1 className="app__title">Find a book</h1>
      <SearchPage />
      <div className="content">
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/book/:volumeId" component={BookPage}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
