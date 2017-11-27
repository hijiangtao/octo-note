export const farenheitToCelsius = (k) => {
	return Math.round((k - 32) * 0.5556);
}

export const humidityPercentage = (h) => {
	return Math.round(h * 100);
}

export const degreesToDirection = (degrees) => {
	let range = 360 / 16;
	let low = 360 - range / 2;
	let high = (low + range) % 360;
	let angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
	for (let i in angles) {

		if (degrees >= low && degrees < high)
			return angles[i];

		low = (low + range) % 360;
		high = (high + range) % 360;
	}
}

export const knotsToKilometres = (knot) => {
	return Math.round(knot * 1.852);
}
