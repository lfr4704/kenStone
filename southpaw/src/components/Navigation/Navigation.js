import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navigation.css';



const navigation = props => (
	<header className ="toolbar">
			<nav className ="toolbar_navigation">
				<div>
					<DrawerToggleButton />
				</div>
				<div className="toolbar_logo"><a href="/">The Logo</a></div>
				<div className="spacer"></div>
				<div className="toolbar_nagivation-items">
					
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Services</a></li>	
						<li><a href="#">Gallery</a></li>
						<li><a href="#">Contact</a></li>															
					</ul>
					
				</div>
			</nav>
	</header>

);



export default navigation; 
