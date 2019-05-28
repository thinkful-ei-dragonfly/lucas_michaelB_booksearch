import React from 'react'

export default class SearchForm extends React.Component{
  render(){
    return (
      <form id='bookSearch'>
        <label htmlFor='search'>Search:</label>
        <input type='text' id='search' name='search' placeholder='Search for books..'></input>
        <button type='submit'>Search</button>
      </form>
    )
  }
}
