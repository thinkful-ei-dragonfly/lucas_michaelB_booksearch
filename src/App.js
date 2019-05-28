import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import ResultsList from './components/ResultsList/ResultsList'
import SearchForm from './components/SearchForm/SearchForm'
import SearchFilters from './components/SearchFilters/SearchFilters'

export default class App extends Component {
  state = {
    books: [],
    loading: false,
    error: null,
    filtered: false,
    API_KEY: 'AIzaSyB23nntppFskdPBsHXbL7gaFzNKOSX_FtM'
  };

  fetchBooks = (e, printType, isEbook) => {
    e.preventDefault();

    this.setState({loading: true});
    let newBooks = [];
    let searchQuery = e.target.search.value;
    let printTypeQuery = e.target.printType.value;
    let bookTypeQuery = e.target.bookType.value;
    let bookFilterString = '';
    if (bookTypeQuery != 'all') {
      bookFilterString = `filter=${bookTypeQuery}&`
    }
    fetch(`https://www.googleapis.com/books/v1/volumes?${bookFilterString}printType=${printTypeQuery}&q=${searchQuery}&key=${this.state.API_KEY}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      else {
        Promise.reject('something went wrong')
      }
    })
    .then(books => {
      if (books.items) {
        newBooks = books.items.map(book => {
          let price = null,
          thumbnail = null;
          if (book.saleInfo.listPrice) {
            price = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`
          }
          if (book.volumeInfo.imageLinks) {
            thumbnail = book.volumeInfo.imageLinks.thumbnail
          }
          return {
            id: book.id,
            name: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            printType: book.volumeInfo.printType,
            price,
            isEbook: book.saleInfo.isEbook,
            thumbnail
          }
        })
      } else {
        newBooks = <div>No Results</div>;
      }
      return newBooks;
    })
    .then(newBooks => this.setState({
      books: newBooks,
      loading: false
    }))
  }

  handleFilter = (e) => {
      e.preventDefault();

      let printTypeQuery = 'all'
      if (e.target.printType.value !== printTypeQuery) {
        printTypeQuery = e.target.printType.value;
      }
      debugger;

      // then call fetchBooks(printType) (this could be 'all', 'books', or 'magazines')
    }

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

        </div>
        <section className='resultsContainer'>
          {loading}
          <ResultsList bookResults={this.state.books}/>
        </section>


      </main>
    );
  }
}
