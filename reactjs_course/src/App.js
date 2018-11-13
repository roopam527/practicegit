import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>HI, NEW STARTING</h1>
    //   </div>
    // );
    return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi , I am React App!!!'));

  }
}

export default App;
