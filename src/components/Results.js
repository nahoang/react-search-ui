import React from "react";

const Results = (props) => {
  const { children, ...rest } = props;

  return (
    <ul
      className="results-container"
      {...rest}
    >
      {children}
    </ul>
  )
}

export default Results;