import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import ResultsList from './components/ResultsList/ResultsList'
import SearchForm from './components/SearchForm/SearchForm'
import SearchFilters from './components/SearchFilters/SearchFilters'
// Header
// searchForm component
// -> input + button
// filters component
// -> form with two select inputs
// results component
// -> list of bookResult components
// -> clickHandler to expand and show description + price and whatever
//
export default class App extends Component {
  state = {
    books: [],
    loading: false,
    error: null
  };

  fetchBooks = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    let newBooks = [];
    const searchQuery = e.target.search.value;
    fetch('https://www.googleapis.com/books/v1/volumes?key=AIzaSyB23nntppFskdPBsHXbL7gaFzNKOSX_FtM&q=' + searchQuery)
    .then(res => res.json())
    .then(books => {
      newBooks = books.items.map(book => {
        return {
          id: book.id,
          name: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          printType: book.volumeInfo.printType,
          price: book.saleInfo.listPrice,
          isEbook: book.saleInfo.isEbook,
          thumbnail: book.volumeInfo.imageLinks.thumbnail
        }
      })
      return newBooks;
    })
    .then(newBooks => this.setState({
      books: newBooks,
      loading: false
    }))
  }
  // price: `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`,

  render(){
    let loading = '';
    if (this.state.loading) {
      loading = <div>Loading...</div>;
    }
    return (
      <main className="App" role='main'>
        <Header role='banner'></Header>
        <div className='search_filter'>
          <SearchForm
            fetchBooks={this.fetchBooks} >

          </SearchForm>
          <SearchFilters></SearchFilters>
        </div>
        <section className='resultsContainer'>
          {loading}
          <ResultsList/>
        </section>


      </main>
    );
  }
}

