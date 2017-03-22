import React, { Component } from 'react';
import { MyPluginName } from './my-plugin-name/index';

class AppComponent extends Component {
  render() {
    return (
      <div className="app-component">
        <h1>App Component Enter</h1>
        <MyPluginName />
      </div>
    );
  }
}

export default AppComponent;
