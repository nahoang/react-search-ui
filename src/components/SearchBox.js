import React from "react";
import SearchInput from "./SearchInput";


const SearchBox = (props) => {
  const { onSubmit } = props;
  const InputView = SearchInput;

  return (
    <form
      onSubmit={e => {
        onSubmit(e);
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
        />
      </div>
    </form>
  )
}

export default SearchBox