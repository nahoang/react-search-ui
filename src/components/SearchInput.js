import React from 'react'

const SearchInput = (props) => {
  const { buttonProps, getAutocomplete, ...rest } = props
  return (
    <>
      <div className="search-box__wrapper">
        <input
          {...rest}
        />
        {getAutocomplete()}
      </div>
      <input {...buttonProps} />
    </>
  )
}

export default SearchInput