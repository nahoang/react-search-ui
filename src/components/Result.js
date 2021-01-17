import React from 'react';
import moment from 'moment';

const Result = (props) => {
  const { result, ...rest } = props;
  const {
    title,
    author,
    created_at,
    url,
  } = result;
  return (
    <li className="result" {...rest}>
      <div className="result__header">
      </div>
      <div
        className="result__body"
      >
     {
         <a
         className="result__title result__title-link result__col-1" 
         dangerouslySetInnerHTML={{ __html: title ? title : 'Unknown title' }}
         href={url}
         target="_blank"
       />
     }
        <span className="result__col-1"> {author}</span>
        <span>{moment(created_at).format('MM-DD-YYYY')}</span>
      </div>
    </li>
  )
}

export default Result;