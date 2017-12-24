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
import { googleBookRetrieve } from "../../core/actions";
import { RootState } from "../../core/reducers";
import { BookQuery } from "../../core/reducers/book";

import Error from "../../common/Error/index";
import Book from "../../components/Book/index";

import IBook from "../../core/models/book.model";

interface IStateProps {
  book: IBook;
  error: string;
}

interface IDispatchProps {
  actions: {
    googleBookRetrieve: typeof googleBookRetrieve;
  };
}

interface IRouteProps {
  volumeId: string;
}

class BookPage extends React.Component<IStateProps & IDispatchProps & RouteComponentProps<IRouteProps>, {}> {

  componentDidMount() {
    this.props.actions.googleBookRetrieve(this.props.match.params.volumeId);
  }

  render() {
    return this.props.error
      ? <Error error={this.props.error}/>
      : <Book book={this.props.book} fullVersion={true}/>;
  }
}

const mapStateToProps = (state: RootState): IStateProps => {
  return {
    book: BookQuery.getBook(state),
    error: BookQuery.getBookError(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  actions: bindActionCreators({googleBookRetrieve}, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookPage));
