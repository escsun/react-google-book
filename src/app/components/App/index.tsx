import * as React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from "../Home";
import BookPage from "../../containers/BookPage";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/book/:id" component={BookPage}/>
    </Switch>
  );
};

export default App;
