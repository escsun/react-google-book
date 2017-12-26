import { Reducer } from "redux";
import { createSelector } from "reselect";
import { BooksAction } from "../actions";
import { BooksConstants } from "../constants";
import { RootState } from "./index";

import IBooks from "../models/books.model";

export interface IBooksState {
  items: IBooks;
  error: string;
  totalItems: number;
  perPage: number;
}

const initialState: IBooksState = {
  items: { kind: null, totalItems: 0, items: []},
  error: null,
  totalItems: 0,
  perPage: 0
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
      return {...state, items: null, error: null, perPage: 40};
    case BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE:
      return {...state, items: action.payload, totalItems: action.payload.totalItems};
    case BooksConstants.GOOGLE_BOOKS_QUERY_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
