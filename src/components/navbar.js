import React, {Component} from 'react';
import './navbar.css'

export default class NavigationBar extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const links = this.props.links.map( (link, index) => {
      return <li><a href={link.href} key={index}>{link.text}</a></li>
    });
    return (
      <div className="navigation-bar">
      <h1>{this.props.title}</h1>
        <nav>
          <ul className="navigation-bar-nav">
            {links}
          </ul>
        </nav>
      </div>
    );
  }
}