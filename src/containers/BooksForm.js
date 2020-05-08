import React, { Component } from 'react';


const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => (
  <div>
    <form>
      <label htmlFor="title">
        Book Title
        <input id="title" name="title" />
      </label>


      <label htmlFor="category">
        Book Category
        <select id="category">
          <option defaultValue="">Select a category</option>
          {CATEGORIES.map((category, index) => <option key={category}>{category}</option>)}
        </select>

      </label>

      <button type="submit">Create Book</button>
    </form>
  </div>
);


export default BooksForm;
