import React from 'react';
import Map from '../Images/World-Map.png';

export default function Navbar () {
	return (
		<nav className='navbar'>
			<img id='map' src={Map} />
			<h1 id='Nav-Title'>Wanderlust</h1>
		</nav>
	);
}
