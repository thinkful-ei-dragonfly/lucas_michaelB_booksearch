import React from 'react'

function ResultItem(props){
  let authorsString = '';
  if (props.book.authors) {
    let authors = props.book.authors.map(author => {
      return <span key={author + '/' + props.book.id}>{author}</span>
    })
    authorsString = <p>Authors: {authors}</p>
  }

  let price = '';
  if (props.book.price) {
    price = <p>Price: ${props.book.price}</p>;
  }

  return (
    <li className='ResultItem' key={props.book.id}>
      <img src={props.book.thumbnail} alt={props.book.name}/>
      <h2>{props.book.name}</h2>
      {authorsString}
      {price}
      <p className='bookDesc'>{props.book.description}</p>
    </li>
  )
}
export default ResultItem;
