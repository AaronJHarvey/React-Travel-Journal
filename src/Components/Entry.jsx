import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

export default function Entry (props) {
	// console.log(props)
	return (
		<div className='entry'>
			<img className='photo' src={props.imageUrl} />
			<div className='location-info'>
				<CiLocationOn id='location-icon' />
				<h3 id='location-name'>{props.location}</h3>
				<a href={props.googleMapsUrl}>
					<h3>View on Google Maps</h3>
				</a>
			</div>
			{/* <h1 className='Entry-Title'>{props.title}</h1> */}
			{/* <h4 className='dates'> */}
			{/* {props.startDate} - {props.endDate} */}
			{/* </h4> */}
			{/* <p className='description'>{props.description}</p> */}
		</div>
	);
}

// title
// location
// googleMapsUrl
// startDate
// endDate
// description
// imageUrl
