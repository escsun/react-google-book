import * as React from "react";
import { connect } from "react-redux";
import {
  RouteComponentProps,
  withRouter
} from "react-router-dom";
import {
  bindActionCreators,
  Dispatch
} from "redux";
import Loader from "../../common/Loader";
import Book from "../../components/Book";

import BookModel from "../../core/models/book.model";
import { RootState } from "../../core/reducers";
import { googleBooksRetrieve } from "../../core/actions";
import {
  getBookById,
  getErrorBookLoading,
} from "../../core/selectors";

interface StateProps {
  book: BookModel;
  errorBookLoading: string;
}

interface DispatchProps {
  actions: {
    googleBooksRetrieve: typeof googleBooksRetrieve;
  };
}

interface RouteProps {
  volumeId: string;
}

class BookPage extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps<RouteProps>, {}> {

  componentDidMount() {
    const {volumeId} = this.props.match.params;
    this.props.actions.googleBooksRetrieve(volumeId);
  }

  renderBook() {
    return <Book book={this.props.book} single={true} />;
  }

  renderErrorLoading() {
    return (
      <div>{this.props.errorBookLoading}</div>
    );
  }

  render() {
    if (!this.props.book && !this.props.errorBookLoading) {
      return <Loader/>;
    }
    return this.props.book ? this.renderBook() : this.renderErrorLoading();
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    book: getBookById(state),
    errorBookLoading: getErrorBookLoading(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  actions: bindActionCreators({googleBooksRetrieve}, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookPage));
