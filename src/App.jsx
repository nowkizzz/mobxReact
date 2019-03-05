import React, { Component } from 'react';
import {observer, inject} from 'mobx-react'

@inject('store') 
@observer
class App extends Component {
  componentDidMount() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    this.props.store.app.handerToggleLeft();
    this.props.store.common.getSysSetting();
  }
  
  render() {
    return (
      <div className="appTop">
        1233
        {this.props.store.app.defaultVal}
        <br />
        {this.props.store.app.getInputLength}
        {this.props.store.common.value}
      </div>
    );
  }
}

export default App;