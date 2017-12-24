import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../../core/reducers";
import { BooksQuery } from "../../core/reducers/books";

import Books from "../../components/Books";
import Error from "../../common/Error";

import IBooks from "../../core/models/books.model";

interface IStateProps {
  books: IBooks;
  error: string;
}

enum ErrorBooksMessage {
  BooksNotFound = "Books not found",
}

class BooksPage extends React.Component<IStateProps, any> {

  render() {
    if (this.props.books && this.props.books.totalItems === 0 && !this.props.books.items) {
      return <Error error={ErrorBooksMessage.BooksNotFound}/>;
    }
    return this.props.error
      ? <Error error={this.props.error}/>
      : <Books books={this.props.books}/>;
  }
}

const mapStateToProps = (state: RootState): IStateProps => ({
  books: BooksQuery.getBooks(state),
  error: BooksQuery.getBooksError(state)
});

export default connect(mapStateToProps)(BooksPage);
