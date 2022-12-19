import React from 'react';
import Entry from './Components/Entry';
import Navbar from './Components/Navbar';
import data from './data';

function App () {
	const entryData = data.map((info) => (
		<Entry
			key={info.id}
			title={info.title}
			location={info.location}
			googleMapsUrl={info.googleMapsUrl}
			startDate={info.startDate}
			endDate={info.startDate}
			description={info.description}
			imageUrl={info.imageUrl}
		/>
	));

	return (
		<div>
			<Navbar />
			{entryData}
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
