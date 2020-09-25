import React from 'react';
import {connect} from 'react-redux'
import {getBookData} from './actions'

import Books from './components/Books';

import './App.css';

function App(props) {
  return (
    <div className="App" className='app-container'>
      <h1>Popular Picture Books for Children</h1>
      <p>The following list is based on the New York Times bestsellers provided by OpenLibrary API.</p>
      {props.isLoading ? <p className='loading'>Loading...please wait.</p> : <Books bookData = {props.bookData} getBookData={props.getBookData}/>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookData: state.bookData,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, {getBookData})(App);
 