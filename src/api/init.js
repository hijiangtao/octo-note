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

export let GET = (url, callback) => {
	let ajax = new XMLHttpRequest();

	// Seta tipo de requisição e URL com os parâmetros
	ajax.open("GET", url, true);

	// Envia a requisição
	ajax.send();

	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = () => {
		// Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			callback(JSON.parse(ajax.responseText));
		}
	}
}

export let formatDate = (d) => {
	let month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
}
