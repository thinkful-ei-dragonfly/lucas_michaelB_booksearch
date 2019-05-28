import React, {Component} from 'react'

export default class SearchFilters extends Component {

  render(){
    return (
      <div id='filters'>
        <label htmlFor='printType'>Print Type</label>
        <select id='printType' defaultValue='all'>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor='bookType'>Book Type</label>
        <select id='bookType' defaultValue='all'>
          <option value="all">All</option>
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free-eBooks</option>
          <option value="full">Full</option>
          <option value="paid-ebooks">Paid-eBooks</option>
          <option value="partial">Partial</option>
        </select>
      </div>
    )
  }
}
