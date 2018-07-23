import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import Backdrop from './components/Backdrop/Backdrop.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isHidden: true };//https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b for set state explanation
    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu =function() {
  
    this.setState({ isHidden: !this.state.isHidden });

  }

  render() {
    

    return (
      <div className="App">
        <Navigation/>
        <SideDrawer/>
        <Backdrop/>
        
        <main className="article">
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
