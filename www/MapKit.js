(function(window) {
	// var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks
	var cordovaRef = window.cordova; 
	
	var MapKit = function() {
		this.options = {
			height: 460,
			diameter: 1000,
			atBottom: true,
			lat: 41.652947,
			lon: -4.728388
		};
		this.mapType = {
			MAP_TYPE_NONE: 0, //No base map tiles.
			MAP_TYPE_NORMAL: 1, //Basic maps.
			MAP_TYPE_SATELLITE: 2, //Satellite maps with no labels.
			MAP_TYPE_TERRAIN: 3, //Terrain maps.
			MAP_TYPE_HYBRID: 4 //Satellite maps with a transparent layer of major streets.
		};
	
		this.iconColors = {
			HUE_RED: 0.0,
			HUE_ORANGE: 30.0,
			HUE_YELLOW: 60.0,
			HUE_GREEN: 120.0,
			HUE_CYAN: 180.0,
			HUE_AZURE: 210.0,
			HUE_BLUE: 240.0,
			HUE_VIOLET: 270.0,
			HUE_MAGENTA: 300.0,
			HUE_ROSE: 330.0
		};
	};
	
	MapKit.prototype = {
		showMap: function(success, error, options) {
			if (options) {
				exec(success, error, 'MapKit', 'showMap', [options]);
			} else {
				exec(success, error, 'MapKit', 'showMap', [this.options]);
			}
		},
	
		addMapPins: function(pins, success, error) {
			exec(success, error, 'MapKit', 'addMapPins', [pins]);
		},
	
		clearMapPins: function(success, error) {
			exec(success, error, 'MapKit', 'clearMapPins', []);
		},
	
		hideMap: function(success, error) {
			exec(success, error, 'MapKit', 'hideMap', []);
		},
	
		changeMapType: function(mapType, success, error) {
			exec(success, error, 'MapKit', 'changeMapType', [mapType ? { "mapType": mapType } :{ "mapType": 0 }]);
		},
		
		setMapData: function(success, error, options) {
			if (options) {
				exec(success, error, 'MapKit', 'setMapData', [options]);
			} else {
				exec(success, error, 'MapKit', 'setMapData', [this.options]);
			}
		}
	
	};
	
	cordovaRef.addConstructor(function() {
		window.plugins = window.plugins || {};
		window.plugins.mapKit = new MapKit();
		
		// dummy stuff to silence calls from mapView regionDidChangeAnimated in .m
		window.geo = window.geo || {};
		window.geo.onMapMove = function(currentLat,currentLon,latitudeDelta,longitudeDelta) {
			// console.log([currentLat,currentLon,latitudeDelta,longitudeDelta]);
		};
	});
})();
