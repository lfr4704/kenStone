import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ showMenu: true };
    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu =function() {
    this.setState({ showMenu: !this.state.showMenu });

  }

  render() {
    return (
      <div className="App">
        <Navigation toggleMenu={this.toggleMenu} showMenu={this.state.showMenu}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
