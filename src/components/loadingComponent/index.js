import React, { Component } from 'react';
import './loadingComponent.scss';

class loadingComponent extends Component {
  render() {
    // console.log('====================================');
    // console.log(this.props);
    // console.log('====================================');
    if (this.props.error) {
      return (
        <div className="loadingComponent">
          <div>Error!</div>
        </div>
      );
    } else if (this.props.pastDelay) {
      return (
        <div className="loadingComponent">
          <div>Error!</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default loadingComponent;