import { Reducer } from "redux";
import { createSelector } from "reselect";
import { BooksAction } from "../actions";
import { BooksConstants } from "../constants";
import { RootState } from "./index";

import IBook from "../models/book.model";

export interface IBooksState {
  items: IBook[];
  error: string;
  totalItems: number;
  perPage: number;
  query: string;
}

const initialState: IBooksState = {
  items: [],
  error: null,
  totalItems: 0,
  perPage: 0,
  query: ""
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
}

export const booksReducer: Reducer<IBooksState> = (state = initialState, action: BooksAction) => {
  switch (action.type) {
    case BooksConstants.GOOGLE_BOOKS_QUERY:
      // TODO add dynamic perPage
      return {...state, items: null, error: null, query: action.payload, perPage: 40};
    case BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE:
      return {...state, items: action.payload.items, totalItems: action.payload.totalItems};
    case BooksConstants.GOOGLE_BOOKS_QUERY_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
