	let cntr = ["2.3364", "48.86091"];
				// marker2 [2.3333, 48.8602]
				// marker2 [2.3397, 48.8607]
				// marker2 [2.3330, 48.8619]
				// marker2 [2.3365, 48.8625]

	

	function mapBox(center) {

	mapboxgl.accessToken = 'pk.eyJ1IjoiZGlhbmEtZGlhbmEtZGV2IiwiYSI6ImNrdTA1bHc2dzBieTEycHQ5cDYyYjltdzAifQ.Ap9bgYgu2iwIUa6svB_TNw';
		let map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: center,
		zoom: 16
		});

		map.addControl(
			new MapboxGeocoder({
				accessToken: mapboxgl.accessToken,
				mapboxgl: mapboxgl,
				marker: {
					color: 'red'
				}
			})
		);
		map.addControl(new mapboxgl.FullscreenControl());
	}
	mapBox(cntr);						