import React from 'react';
import './Header.css';

class Header extends React.Component{
  render(){
    return(
      <div className="header-style">

        <img src="https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />

        <img src="http://www.hitfit.us/images/Academy.jpg" />
        <img src="https://images.pexels.com/photos/980437/pexels-photo-980437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
    );
  }

}

export default Header
