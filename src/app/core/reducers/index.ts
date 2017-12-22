import * as fromRouter from "react-router-redux";
import { combineReducers } from "redux";
import * as fromBooks from "./books";

export interface RootState {
  routing: fromRouter.RouterState;
  books: fromBooks.BooksState;
}

export default combineReducers<RootState>({
  routing: fromRouter.routerReducer,
  books: fromBooks.booksReducer
});
