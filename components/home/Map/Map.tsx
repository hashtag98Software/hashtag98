import {
	APIProvider,
	Map as MapGoogle,
	Marker,
} from '@vis.gl/react-google-maps'

const Map = () => {
	return (
		<APIProvider apiKey={'AIzaSyCF3eh50jv5GbKBuqUnHUB3eorHRpN4vRo'}>
			<MapGoogle
				style={{ width: '100vw', height: '100vh' }}
				defaultCenter={{
					lat: 6.210641999306972,
					lng: -75.56866823124714,
				}}
				defaultZoom={18}
				scrollwheel={false}
				mapTypeControl={false}
				fullscreenControl={false}
				streetViewControl={false}
			>
				<Marker
					position={{ lat: 6.210641999306972, lng: -75.56866823124714 }}
					icon={'/img/marker.png'}
				/>
			</MapGoogle>
		</APIProvider>
	)
}

export default Map
