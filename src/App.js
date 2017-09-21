import React, { Component } from 'react';
import NavigationBar from './components/navbar'
import './App.css';

class App extends Component {
  render() {
    const links = [{
      text: 'Courses',
      href: 'http://www.thinkful.com/courses/'
    }, {
      text: 'Mentorship',
      href: 'http://www.thinkful.com/mentorship/'
    }];
    return (
      <NavigationBar title="Thinkful" links={links} />
    );
  }
}

export default App;
