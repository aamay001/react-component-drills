import React, {Component} from 'react';
import './contact.css';

export default class Contact extends Component {
  render(){
    const imgAlt = `Photo of ${this.props.name}`;
    return (
      <div className="contact">
        <img className="contact-photo" src={this.props.photo} alt={imgAlt}/>
        <div className="contact-name">{this.props.name}</div>
        <div className="contact-address">{this.props.address}</div>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: '',
  photo: '',
  address: ''
}