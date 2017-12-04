/**
 * init.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-30 16:37:58
 * @version $Id$
 */

'use strict'

export let detectEnv = () => {
	if (typeof (Storage) === "undefined") {
		// console.error('Sorry! No Web Storage support...');
		return false;
	}

	return true;
}

let pad = (number) => {
	if (number < 10) {
		return '0' + number;
	}
	return number;
}

export let getISOString = (date) => {
	return date.getUTCFullYear() +
		'-' + pad(date.getUTCMonth() + 1) +
		'-' + pad(date.getUTCDate())
}

export let getLocation = (type, callback) => {
	if (type === 'beijing') {
		return callback(null, {
			lat: 39.9042,
			lng: 116.4074
		});
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;

			return callback(null, {
				lat,
				lng
			});
		}, (err) => {
			return callback(err);
		})
	} else {
		return callback("Could not get location", {});
	}
}

export let JSONP = (url, callback) => {
	const link = `${url}&callback=JSONPcallback`;
	window.JSONPcallback = callback;
	let script = document.createElement("script");
	script.type = "text/javascript";
	script.src = link;
	document.getElementsByTagName("head")[0].appendChild(script);

}
