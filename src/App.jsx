import React from 'react';
import Entry from './Components/Entry';
import Navbar from './Components/Navbar';

function App () {
	return (
		<div>
			<Navbar />
			<Entry
				title='Mount Fuji'
				location='Japan'
				googleMapsUrl='https://goo.gl/maps/1DGM5WrWnATgkSNB8'
				startDate='Jan 12, 2021'
				endDate='Jan 24, 2021'
				description='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
				imageUrl='src/Images/Mt-Fuji.jpeg'
			/>
		</div>
	);
}

export default App;
// title
// location
// googleMapsUrl
// startDate:
// endDate
// description
// imageUrl
