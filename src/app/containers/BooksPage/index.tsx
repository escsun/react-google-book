import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  bindActionCreators,
  Dispatch
} from "redux";
import { googleBooksByQuery } from "../../core/actions";
import { RootState } from "../../core/reducers";
import { BooksQuery } from "../../core/reducers/books";

import Books from "../../components/Books";
import Error from "../../common/Error";

import IBook from "../../core/models/book.model";

interface IStateProps {
  books: IBook[];
  error: string;
  totalItems: number;
}

interface IRouteProps {
  query: string;
  page: string;
}

interface IDispatchProps {
  actions: {
    googleBooksByQuery: typeof googleBooksByQuery;
  };
}

enum ErrorBooksMessage {
  BooksNotFound = "Books not found",
}

class BooksPage extends React.Component<IStateProps & IDispatchProps & RouteComponentProps<IRouteProps>, any> {

  componentDidMount() {
    const {query, page} = this.props.match.params;
    console.log(query, page);
    // if (query) {
    //  this.props.actions.googleBooksByQuery(query);
    // }
    // console.log(query, page);
  }

  render() {
    if (this.props.books && this.props.totalItems === 0) {
      return <Error error={ErrorBooksMessage.BooksNotFound}/>;
    }
    return this.props.error
      ? <Error error={this.props.error}/>
      : <Books books={this.props.books}/>;
  }
}

const mapStateToProps = (state: RootState): IStateProps => ({
  books: BooksQuery.getBooks(state),
  error: BooksQuery.getBooksError(state),
  totalItems: BooksQuery.getBooksTotalItems(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  actions: bindActionCreators({googleBooksByQuery}, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BooksPage));
