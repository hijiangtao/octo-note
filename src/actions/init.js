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

export { detectEnv }
