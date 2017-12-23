import * as React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import NotFound from "../../common/NotFound";
import Home from "../Home";
import Layout from "../Layout";

import BookPage from "../../containers/BookPage";

const App = (): JSX.Element => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/book/:volumeId" component={BookPage}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
