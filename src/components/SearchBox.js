import React from "react";
import SearchInput from "./SearchInput";


const SearchBox = (props) => {
  const { onSubmit} = props;
  const InputView = SearchInput;
  const [text, setText] = React.useState("");
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
        />
      </div>
    </form>
  )
}

export default SearchBox