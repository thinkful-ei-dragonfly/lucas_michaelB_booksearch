import React from 'react'

function SearchForm (props) {
  return (
    <form id='bookSearch' onSubmit={props.fetchBooks}>
      <label htmlFor='search'>Search:</label>
      <input type='text' id='search' name='search' placeholder='Search for books..'></input>
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchForm;