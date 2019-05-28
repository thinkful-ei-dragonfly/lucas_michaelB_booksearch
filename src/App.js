import React from 'react';
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
function App() {
  return (
    <main className="App" role='main'>
      <Header role='banner'></Header>
      <div className='search_filter'>
        <SearchForm></SearchForm>
        <SearchFilters></SearchFilters>
      </div>
      <section className='resultsContainer'>
        <ResultsList/>
      </section>


    </main>
  );
}

export default App;
