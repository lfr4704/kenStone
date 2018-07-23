import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ showMenu: true };//https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b for set state explanation
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
