import React, { Component } from 'react';
import {observer,store, inject} from 'mobx-react';

@inject('app')
@observer
class Home extends Component {
  render() {
    let app = this.props.app;
    return (
      <div className="homePage">
        {app.defaultVal}
        <br />
        <button onClick={() => app.addValue()}>搜索</button>
        {app.defaultValAdd}
      </div>
    );
  }
}

export default Home;