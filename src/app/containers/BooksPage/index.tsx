import * as React from "react";
import { connect } from "react-redux";
import {
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import {
  bindActionCreators,
  Dispatch
} from "redux";
import { googleBooksByQuery } from "../../core/actions";
import { RootState } from "../../core/reducers";
import { BooksQuery } from "../../core/reducers/books";

import PaginationPage from "../../containers/PaginationPage";
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
  page: number;
}

interface IDispatchProps {
  actions: {
    googleBooksByQuery: typeof googleBooksByQuery;
  };
}

enum ErrorBooksMessage {
  BooksNotFound = "Books not found",
}

class BooksPage extends React.PureComponent<IStateProps & IDispatchProps & RouteComponentProps<IRouteProps>, any> {

  componentDidMount() {
    const {query, page} = this.props.match.params;
    return query && this.props.actions.googleBooksByQuery({query: query, page: page});
  }

  componentDidUpdate(prevProps) {
    const currentLocationPath = this.props.location.pathname;
    const prevLocationPath = prevProps.location.pathname;

    if (currentLocationPath !== prevLocationPath) {
      const {query, page} = this.props.match.params;
      this.props.actions.googleBooksByQuery({query: query, page: page});
      this.render();
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.books && this.props.totalItems === 0) {
      return <Error error={ErrorBooksMessage.BooksNotFound}/>;
    }
    if (!this.props.match.params.query && !this.props.books) {
      return "";
    }
    return (
      <div>
        <PaginationPage />
        <Books books={this.props.books}/>
      </div>
    );

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
