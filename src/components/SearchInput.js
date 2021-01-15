import React from 'react'

const SearchInput = (props) => {
  const { ...rest } = props
  return (
    <>
      <div className="search-box__wrapper">
        <input
          {...rest}
        />
      </div>
    </>
  )
}

export default SearchInput