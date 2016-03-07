/*
	Server side geolocation library
*/
Meteor.methods({
	geolocate: function(addr){
		var geo = new GeoCoder();
		var result = geo.geocode(addr);
		return result;
	},
	reverse: function(lat, lng){
		var geo = new GeoCoder();
		var result = geo.reverse(lat, lng);
		return result;
	}
});