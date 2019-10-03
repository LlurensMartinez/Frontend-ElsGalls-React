import React, { Component } from 'react';

class omelete extends Component {
  render() {
    return (
      <div className="row omeleteImg">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={this.props.image} />
                <span className="card-title">{this.props.title}</span>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default omelete;