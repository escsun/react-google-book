import * as React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from "../Home";
import BookPage from "../../containers/BookPage";
import Layout from "../Layout";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Layout>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/book/:volumeId" component={BookPage}/>
      </Layout>
    </Switch>
  );
};

export default App;
