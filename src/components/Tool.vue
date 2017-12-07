<template>
	<div>
		<div class="page__hd">
			<h1 class="page__title">{{ title }}</h1>
			<p class="page__desc">{{ desc }}</p>
		</div>

		<div class="page__bd">
			<div class="weui-panel weui-panel_access">
				<div class="weui-panel__hd">天气情况</div>
					<div class="weui-panel__bd">
						<a @click="getWeather('beijing')" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
							<div class="weui-media-box__hd">
								<img class="weui-media-box__thumb" src="../assets/img/Beijing.svg" alt="">
							</div>
							<div class="weui-media-box__bd">
								<h4 class="weui-media-box__title">北京天气</h4>
								<p class="weui-media-box__desc">点击获取北京天气情况。</p>
							</div>
						</a>
						<a @click="getWeather('local')"  href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
							<div class="weui-media-box__hd">
								<img class="weui-media-box__thumb" src="../assets/img/Location.svg" alt="">
							</div>
							<div class="weui-media-box__bd">
								<h4 class="weui-media-box__title">本地天气</h4>
								<p class="weui-media-box__desc">点击获取本地天气情况。</p>
							</div>
						</a>
					</div>
			</div>

			<div v-show="props.length" class="weui-panel weui-panel_access">
				<div class="weui-panel__hd">天气详细信息</div>
				<div class="weui-panel__bd">
					<div v-for="item in props" v-show="item.text" class="weui-media-box weui-media-box_text">
						<h4 class="weui-media-box__title">{{ item.title }}</h4>
						<p class="weui-media-box__desc">{{ item.text }}</p>
					</div>
				</div>
				<div class="weui-panel__ft">
					<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
						<div class="weui-cell__bd">查看更多</div>
						<span class="weui-cell__ft"></span>
					</a>    
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getLocation, JSONP } from '../api/init'
import { weatherURL, weatherAPI } from '../api/key'
import { farenheitToCelsius, humidityPercentage, degreesToDirection, knotsToKilometres } from '../api/math'

const getDescribeTxt = (txt, type) => {
	switch (type) {
	case 'humidity': 
		return `当前湿度为 ${txt} %`;
	case 'pressure': 
		return `当前气压为 ${txt} mb`;
	case 'uvIndex': 
		return `当前紫外线强度为 ${txt}`;
	case 'temperature':
		txt = txt.split(",");
		return `当前摄氏温度为 ${txt[0]} C, 华氏温度为 ${txt[1]} F`;
	case 'windBearing': 
		return `当前风向为 ${txt}`;
	case 'windSpeed': 
		return `当前风速为 ${txt} km/h`;
	default:
		return '';
	}
}

export default {
	name: 'tool',
	data() {
		return {
			title: 'Weather',
			desc: '天气查询工具',
			props: []
		}
	},
	methods: {
		getWeather(type) {
			getLocation(type, (err, {lat = 39.9042, lng = 116.4074}) => {
				if (err) {
					console.log(JSON.stringify(err));
				}

				const url = `${weatherURL}/forecast/${weatherAPI}/${lat},${lng}?format=jsonp`;
				return JSONP(url, this.updateWeatherData.bind(this));
			});	
		},
		updateWeatherData(object) {
			this.props = [];

			const humidity = humidityPercentage(object.currently.humidity);
			this.props.push({
				title: "Humidity",
				text: getDescribeTxt(humidity, "humidity")
			})

			const pressure = object.currently.pressure;
			this.props.push({
				title: "Pressure",
				text: getDescribeTxt(pressure, "pressure")
			})

			const uvIndex = object.currently.uvIndex;
			this.props.push({
				title: "UV",
				text: getDescribeTxt(uvIndex, "uvIndex")
			})

			const temperature = `${farenheitToCelsius(object.currently.temperature)},${object.currently.temperature}`;
			this.props.push({
				title: "Temperature",
				text: getDescribeTxt(temperature, "temperature")
			})

			const windBearing = degreesToDirection(object.currently.windBearing);
			this.props.push({
				title: "Wind Direction",
				text: getDescribeTxt(windBearing, "windBearing")
			})

			const windSpeed = knotsToKilometres(object.currently.windSpeed);
			this.props.push({
				title: "Wind Speed",
				text: getDescribeTxt(windSpeed, "windSpeed")
			})
			
			const summary = "Current Location: " + object.timezone + "; Weather Summary: " + object.currently.summary;
			this.props.push({
				title: "Summary",
				text: summary
			})
		}
	}
}
</script>