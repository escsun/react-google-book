import * as React from "react";
import { connect } from "react-redux";
import {
  bindActionCreators,
  Dispatch
} from "redux";
import { googleBooksByQuery } from "../../core/actions";

import Search from "../../components/Search";

interface IDispatchProps {
  actions: {
    googleBooksByQuery: typeof googleBooksByQuery;
  };
}

class SearchPage extends React.PureComponent<IDispatchProps, {}> {

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.actions.googleBooksByQuery(event.target.value);
  }

  render() {
    return (
      <Search handleInput={this.handleInput}/>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  actions: bindActionCreators({googleBooksByQuery}, dispatch)
});

export default connect(null, mapDispatchToProps)(SearchPage);
