import React from 'react'

const SearchInput = (props) => {
  const { buttonProps, ...rest } = props
  return (
    <>
      <div className="search-box__wrapper">
        <input
          {...rest}
        />
      </div>
      <input {...buttonProps} />
    </>
  )
}

export default SearchInput