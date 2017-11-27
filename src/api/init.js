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

export let getLocation = (callback) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;

			callback(null, {
				lat,
				lng
			});
		}, (err) => {
			callback(err);
		})
	} else {
		callback("Could not get location", {});
	}
}

export let JSONP = (url, callback) => {
	const link = `${url}&callback=${callback}`;
	let script = document.createElement("script");
	script.type = "text/javascript";
	script.src = link;
	document.getElementsByTagName("head")[0].appendChild(script);

}
