import * as d3 from 'd3';

// "column_names": [
// "Date",
// "Open",
// "High",
// "Low",
// "Close",
// "Volume",
// "Ex-Dividend",
// "Split Ratio",
// "Adj. Open",
// "Adj. High",
// "Adj. Low",
// "Adj. Close",
// "Adj. Volume"
// ],

export const drawStock = (id) => {
	return (res) => {
		let d3Id = `#${id}`,
			data = res.dataset_data ? res.dataset_data.data : res.dataset.data;

		let margin = {
				top: 4,
				right: 4,
				bottom: 20,
				left: 35
			},
			conStyle = document.getElementById(id),
			width = conStyle.offsetWidth - margin.left - margin.right,
			height = conStyle.offsetHeight - margin.top - margin.bottom;

		// set the ranges
		let x = d3.scaleTime().range([0, width]);
		let y = d3.scaleLinear().range([height, 0]);

		// define the 1st line
		let valueline = d3.line()
			.x(function (d) {
				return x(d.date);
			})
			.y(function (d) {
				return y(d.close);
			});

		// define the 2nd line
		let valueline2 = d3.line()
			.x(function (d) {
				return x(d.date);
			})
			.y(function (d) {
				return y(d.open);
			});

		// format the data
		data.forEach(function (d) {
			d.date = new Date(d[0]);
			d.close = +d[4];
			d.open = +d[1];
		});

		let svg = document.getElementById(`${id}_g`);
		if (!svg) {
			svg = d3.select(d3Id).append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform",
					"translate(" + margin.left + "," + margin.top + ")")
				.attr("id", `${id}_g`);
		} else {
			svg.innerHTML = "";
			svg = d3.select(`#${id}_g`);
		}

		// Scale the range of the data
		x.domain(d3.extent(data, function (d) {
			return d.date;
		}));
		y.domain([d3.min(data, function (d) {
			return Math.min(d.close, d.open);
		}) - 10, d3.max(data, function (d) {
			return Math.max(d.close, d.open);
		}) + 10]);

		// Add the valueline path.
		svg.append("path")
			.data([data])
			.attr("class", "line")
			.attr("d", valueline);

		// Add the valueline2 path.
		svg.append("path")
			.data([data])
			.attr("class", "line")
			.style("stroke", "red")
			.attr("d", valueline2);

		// Add the X Axis
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d")).ticks(5));

		// Add the Y Axis
		svg.append("g")
			.call(d3.axisLeft(y).ticks(6));
	}
}
