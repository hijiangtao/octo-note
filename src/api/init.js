/**
 * init.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-30 16:37:58
 * @version $Id$
 */

'use strict'

let detectEnv = function() {
	if (typeof(Storage) === "undefined") {
		console.error('Sorry! No Web Storage support...');
		return false;
	}

	return true;
}

let pad = function(number) {
	if (number < 10) {
		return '0' + number;
	}
	return number;
}

let getISOString = function(date) {
	return date.getUTCFullYear() +
		'-' + pad(date.getUTCMonth() + 1) +
		'-' + pad(date.getUTCDate())
}

export { detectEnv, getISOString }
