import * as React from "react";
import { connect } from "react-redux";
import {
  bindActionCreators,
  Dispatch
} from "redux";
import { googleBooksByQueryInput } from "../../core/actions";

import Search from "../../components/Search";

interface IDispatchProps {
  actions: {
    googleBooksByQueryInput: typeof googleBooksByQueryInput;
  };
}

class SearchPage extends React.PureComponent<IDispatchProps, {}> {

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.actions.googleBooksByQueryInput(event.target.value);
  }

  render() {
    return (
      <Search handleInput={this.handleInput}/>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  actions: bindActionCreators({googleBooksByQueryInput}, dispatch)
});

export default connect(null, mapDispatchToProps)(SearchPage);
