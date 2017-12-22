import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home";

const App = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
};

export default App;
