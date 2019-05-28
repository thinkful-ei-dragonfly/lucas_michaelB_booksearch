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
      </div>
    )
  }
}
