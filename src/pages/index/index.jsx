import React, { Component } from 'react';
import {observer, inject} from 'mobx-react'
import './index.scss';

// 可以多个引入
@inject('app') 
@inject('common')
@observer
class App extends Component {
  componentDidMount() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    // this.props.store.app.handerToggleLeft();
    this.props.common.getSysSetting();
  }
  
  render() {
    return (
      <div className="appTop">
        {this.props.app.defaultVal}
        <p className="pValue">{this.props.common.value}</p>
        
        {/* {this.props.store.app.defaultVal}
        <br />
        {this.props.store.app.getInputLength}
        {this.props.store.common.value} */}
      </div>
    );
  }
}

export default App;