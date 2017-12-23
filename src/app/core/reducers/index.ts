import { routerReducer, RouterState } from "react-router-redux";
import { combineReducers } from "redux";
import * as fromBooks from "./books";

export interface RootState {
  router: RouterState;
  books: fromBooks.BooksState;
}

export default combineReducers<RootState>({
  router: routerReducer,
  books: fromBooks.booksReducer
});
