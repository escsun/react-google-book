import { History } from "history";
import {
  applyMiddleware,
  createStore
} from "redux";
import {
  routerMiddleware as createRouterMiddleware
} from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, } from "redux-persist";

import IHotModule from "./models/hot-module.model";
import rootReducers from "./reducers";
import rootSaga from "./sagas";

declare const module: IHotModule;

const configureStore = (history: History, initialState = {}) => {

  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(
      routerMiddleware,
      sagaMiddleware
    ))
  );

  const persistor = persistStore(store, null, () => store.getState());
  // Run Saga
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return {persistor, store};
};

export default configureStore;
