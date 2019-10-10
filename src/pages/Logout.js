import React, { Component } from 'react';

class Logout extends Component {
  
  exit = () => {
  localStorage.removeItem('token');
  this.props.history.push('/');
  }

  render() {
    return (
      <a href="/" onClick ={this.exit}>Logout</a>
    );
  }
}

export default Logout;