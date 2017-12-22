import * as React from "react";
import { connect } from "react-redux";
import {
  bindActionCreators,
  Dispatch
} from "redux";
import BookSearch from "../../components/BookSearch";
import { googleBooksQuery } from "../../core/actions";

interface DispatchProps {
  actions: {
    googleBooksQuery: typeof googleBooksQuery;
  };
}

class BookSearchPage extends React.PureComponent<DispatchProps, {}> {

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.actions.googleBooksQuery(event.target.value);
  }

  render() {
    return (
      <BookSearch handleChange={this.handleChange}/>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  actions: bindActionCreators({googleBooksQuery}, dispatch)
});

export default connect(null, mapDispatchToProps)(BookSearchPage);
