import React from "react";

import SearchInput from "./SearchInput";
import Autocomplete from './Autocomplete';


const SearchBox = (props) => {
  const { onSubmit} = props;
  const InputView = SearchInput;
  const [text, setText] = React.useState("");

  const autocompletedResults = [
    'test 01',
    'test 02', 
    'test 03'
  ]
  const useAutocomplete = true;
  const allAutocompletedItemsCount = autocompletedResults.length;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text);
      }}
    >
      <div className="search-box">
        <InputView
          className="searchbox__text-input"
          placeholder="Search"
          buttonProps={{
            type: "submit",
            value: "Search",
            className:"search-box__submit"
          }}
          onChange={(e) => setText(e.target.value)}
          getAutocomplete={() => {
            if (
              useAutocomplete &&
              allAutocompletedItemsCount > 0
            ) {
              console.log('render autocomplete!')
              return (
                <Autocomplete 
                  autocompletedResults={autocompletedResults}
                  {...props}  
                />
              )
            } else {
              return null;
            }
          }}
        />
      </div>
    </form>
  )
}

export default SearchBox