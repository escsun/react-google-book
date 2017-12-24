import * as React from "react";

interface IProps {
  error: string;
}

const Error = (props: IProps): JSX.Element => {
  return (
    <div className="error">{props.error}</div>
  );
};

export default Error;
