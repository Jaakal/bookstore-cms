import React, { Component } from 'react';


const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
class BooksForm extends Component {
  render() {

    return (
      <div>
        <form>
          <input name="title" value=""/>
          <select>
    {CATEGORIES.map((category,index)=><option key={index}>{category}</option>)}
          </select>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default BooksForm;