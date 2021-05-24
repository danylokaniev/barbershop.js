import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
	width: '90%',
	height: '300px',
}


function GoogleMap({ google }) {
	return (
		<Map
			google={google}
			zoom={8}
			style={mapStyles}
			initialCenter={{ lat: 48.111, lng: -122.176 }}
		>
			<Marker position={{ lat: 48.00, lng: -122.00 }} />
		</Map>
	)
}


export default GoogleApiWrapper({ apiKey: process.env.GOOGLE_API_KEY })(GoogleMap)
