import React from 'react'
import SearchFilters from '../SearchFilters/SearchFilters';

function SearchForm (props) {
  return (
    <form id='bookSearch' onSubmit={props.fetchBooks}>
      <label htmlFor='search'>Search:</label>
      <input type='text' id='search' name='search' placeholder='Search for books..'></input>
      <SearchFilters />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchForm;
