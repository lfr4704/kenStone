import React from 'react';
import './SideDrawer.css';

const sideDrawer = props =>(
	<nav className="side-drawer">
		<ul>
			<li><a href="/">About</a></li>
			<li><a href="/">Services</a></li>
			<li><a href="/">Gallery</a></li>
			<li><a href="/">Contact</a></li>
			</ul>
	</nav>
);

export default sideDrawer;