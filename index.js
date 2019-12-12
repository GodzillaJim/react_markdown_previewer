import React, { Component } from 'react';
import { render } from 'react-dom';
import Body from './Hello';
import ReactFCCtest from 'react-fcctest';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Batman'
    };
  }

  render() {
    return (
      <div>
        <Body/>
        <ReactFCCtest/>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
