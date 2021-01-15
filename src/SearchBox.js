import React from 'react'
import SearchInput from './SearchInput'


const SearchBox = (props) => {
  const InputView = SearchInput;

  return (
    <form>
      <div className="search-box">
        <InputView
          className="searchbox__text-input"
        />
      </div>
    </form>
  )
}

export default SearchBox