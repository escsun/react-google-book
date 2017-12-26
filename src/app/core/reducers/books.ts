import { Reducer } from "redux";
import { createSelector } from "reselect";
import { BooksAction } from "../actions";
import { BooksConstants } from "../constants";
import { RootState } from "./index";

import IBook from "../models/book.model";
import IBooksRoute from "../models/books-route.model";

export interface IBooksState {
  items: IBook[];
  error: string;
  totalItems: number;
  perPage: number;
  route: IBooksRoute;
}

const initialState: IBooksState = {
  items: [],
  error: null,
  totalItems: 0,
  perPage: 0,
  route: {query: "", page: 1}
};

export namespace BooksQuery {
  export const getBooks = (state: RootState) => state.books.items;
  export const getBooksError = (state: RootState) => state.books.error;
  export const getBooksTotalItems = (state: RootState) => state.books.totalItems;
  export const getBooksPerPage = (state: RootState) => state.books.perPage;
  export const getBooksPages = createSelector(
    getBooksTotalItems,
    getBooksPerPage,
    (items, perPage) => Math.floor(items / perPage)
  );
  export const getBooksRoute = (state: RootState) => state.books.route;
}

export const booksReducer: Reducer<IBooksState> = (state = initialState, action: BooksAction) => {
  switch (action.type) {
    // TODO add dynamic perPage
    case BooksConstants.GOOGLE_BOOKS_QUERY:
      return {...state, items: null, error: null, route: action.payload, perPage: 40};
    // TODO add dynamic perPage
    case BooksConstants.GOOGLE_BOOKS_QUERY_INPUT:
      return {...state, items: null, error: null, perPage: 40};
    case BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE:
      return {...state, items: action.payload.items, totalItems: action.payload.totalItems};
    case BooksConstants.GOOGLE_BOOKS_QUERY_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
