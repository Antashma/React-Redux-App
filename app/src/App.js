import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {getBookData} from './actions'

import Books from './components/Books';

function App(props) {
  useEffect(() => {
    props.getBookData();
  }, [])
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>App stuff will go below</p>
      {props.isLoading ? 'Loading...please wait.' : <Books data = {props.bookData} />}
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
 