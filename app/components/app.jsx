import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher v1</h1>
        {this.props.children}
      </div>
    )
  }
}
