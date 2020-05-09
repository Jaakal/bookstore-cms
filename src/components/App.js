import React from 'react';

import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

import '../css/app.css';

function App() {
  return (
    <div className="app">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
