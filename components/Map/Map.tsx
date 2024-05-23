import {
	APIProvider,
	Map as MapGoogle,
	Marker,
} from '@vis.gl/react-google-maps'

type MapProps = {
	className?: string
}
const Map = ({ className }: MapProps) => {
	return (
		<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
			<MapGoogle
				className={className}
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
