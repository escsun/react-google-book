import {
  routerReducer,
  RouterState
} from "react-router-redux";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { bookReducer, IBookState } from "./book";
import { booksReducer, IBooksState } from "./books";

// tslint:disable-next-line
export interface RootState {
  router: RouterState;
  books: IBooksState;
  book: IBookState;
}

const booksPersistConfig = {
  key: "books",
  storage: storage
};

export default combineReducers<RootState>({
  router: routerReducer,
  books: persistReducer(booksPersistConfig, booksReducer),
  book: bookReducer
});
