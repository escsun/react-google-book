import {
  applyMiddleware,
  createStore
} from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { IHotModule } from "./models/hot-module.model";
import rootReducer from "./reducers";

const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  routerMiddleware,
  sagaMiddleware
];

declare const module: IHotModule;

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
