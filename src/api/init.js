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

export let getLocation = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
		})
	} else {
		window.alert("Could not get location");
	}
}
