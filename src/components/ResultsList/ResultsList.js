import React from 'react'
import ResultItem from '../ResultItem/ResultItem'

function ResultsList(props){
  let bookResults = [
    <div key='0'>No Results.  Use the search bar to find books.</div>
  ];
  if (props.bookResults && props.bookResults.length > 0) {
    bookResults = props.bookResults.map(book => {
      return <ResultItem key={book.id} book={book}/>
    });
  }
    return (
      <ul className="ResultsList">
      {bookResults}
      </ul>
    )
}

export default ResultsList;
