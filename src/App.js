import React, { Component, Fragment } from 'react';
import './App.css';

import Exam from './component/Exam';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Exam data='Exam'/>
      </Fragment>
    );
  }
}

export default App;
