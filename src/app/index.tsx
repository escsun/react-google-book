import "./polyfills";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import configureStore from "./core/store";

import { IHotModule } from "./core/models/hot-module.model";

import "./index.scss";

import App from "./components/App";

const history = createHistory();

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore(history)}>
        <ConnectedRouter history={history}>
          <Component/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root") as HTMLElement
  );
};

render(App);

declare const module: IHotModule;

if (module.hot) {
  module.hot.accept("./components/App", () => render(App));
}
