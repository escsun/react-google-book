import * as React from "react";

import "./index.scss";

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const Loader = (propName: string) => (WrappedComponent: React.ComponentType<any>) => {
  return class Loader extends React.Component<any, any> {
    render() {
      return isEmpty(this.props[propName]) ? <div className="loader"/> : <WrappedComponent {...this.props} />;
    }
  };
};

export default Loader;
