import {
  applyMiddleware,
  createStore
} from "redux";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { IHotModule } from "./models/hot-module.model";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

declare const module: IHotModule;

const configureStore = (history, initialState = {}) => {

  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    routerMiddleware,
    sagaMiddleware
  ];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
