import React from 'react';

const Autocomplete = (props) => {
  const { autocompleteResults, autocompletedResults } = props;
  console.log('autocompletedResults', autocompletedResults)
  let index = 0;
  return (
    <div className="search-box__autocomplete-container">
      {
        !!autocompletedResults &&
        autocompletedResults.length > 0 && (
          <ul className="search-box__results-list">
            {autocompletedResults.map(result => {
              index++;
              return (
                <li>
                  <span>{result}</span>
                </li>
              )
            })

            }
          </ul>
        )
      }
    </div>
  )

}

export default Autocomplete;