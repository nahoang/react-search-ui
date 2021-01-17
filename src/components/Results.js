import React from "react";

import Result from './Result';

const Results = (props) => {
  const { 
    results,
    titleField, ...rest } = props;
  return (
    <ul
      className="results-container"
      {...rest}
    >
      {results.map(result => (
        <Result
          result={result}
       />
      ))}
     
    </ul>
  )
}

export default Results;