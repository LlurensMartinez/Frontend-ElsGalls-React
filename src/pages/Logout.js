import React, { Component } from 'react';

class Logout extends Component {
  
  exit = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('logedUserId');
  localStorage.removeItem('nameUser');
  localStorage.removeItem('surnamesUser');
  localStorage.removeItem('emailUser');
  localStorage.removeItem('img');
  localStorage.removeItem('randid');
  localStorage.removeItem('urlImg');
  
  this.props.history.push('/');
  }

  render() {
    return (
      <a href="/" onClick ={this.exit}>Logout</a>
    );
  }
}

export default Logout;