import React from 'react';

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
        {title && (
          <a
            className="result__title result__title-link" 
            dangerouslySetInnerHTML={{ __html: title }}
            href={url}
            target="_blank"
          />
        )}
      </div>
      <div
        className="result__body"
      >
        <ul>
          <li>
            <span>Title: {title} - </span>
            <span>Author: {author}</span>
          </li>
        </ul>

      </div>
    </li>
  )
}

export default Result;