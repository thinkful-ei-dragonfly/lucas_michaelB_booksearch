import React from 'react'
import ResultItem from '../ResultItem/ResultItem'

function ResultsList(props){
  const bookResults = props.bookResults.map(book => {
    return <ResultItem key={book.id} book={book}/>
  });
    return (
      <ul className="ResultsList">
      {bookResults}
      </ul>
    )
}

export default ResultsList;
