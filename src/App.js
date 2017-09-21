import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const branchList = this.props.branches.map(branch =>
      <li><a href={branch.url}>{branch.name}</a></li>
    );
    return (
      <div>
        <h1>See branches for drills.</h1>
        <ul>{branchList}</ul>
      </div>
    );
  }
}

App.defaultProps = {
  branches: [
    {
      name: "Navigation Bar",
      url: "https://github.com/aamay001/react-component-drills/tree/learn/navigation-bar"
    }
  ]
}

export default App;
