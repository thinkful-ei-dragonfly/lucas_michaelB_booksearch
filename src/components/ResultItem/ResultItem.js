import React from 'react'

function ResultItem(props){
  let authors = props.book.authors.map(author => {
    return <span>{author}</span>
  })
  let price = '';
  if (props.book.price) {
    price = <p>Price: ${props.book.price}</p>;
  }
  return (
    <li key={props.book.id}>
      <img src={props.book.thumbnail} alt={props.book.name}/>
      <h2>{props.book.name}</h2>
      <p>Author(s):{authors}</p>
      {price}
      <p className='bookDesc'>{props.book.description}</p>
    </li>
  )
}
export default ResultItem;
