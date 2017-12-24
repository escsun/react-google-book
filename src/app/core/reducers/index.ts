import {
  routerReducer,
  RouterState
} from "react-router-redux";
import { combineReducers } from "redux";
import {
  bookReducer,
  IBookState
} from "./book";
import {
  booksReducer,
  IBooksState
} from "./books";

// tslint:disable-next-line
export interface RootState {
  router: RouterState;
  books: IBooksState;
  book: IBookState;
}

export default combineReducers<RootState>({
  router: routerReducer,
  books: booksReducer,
  book: bookReducer
});
