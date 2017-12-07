<template>
	<div>
		<div class="page__hd">
			<h1 class="page__title">{{ title }}</h1>
			<p class="page__desc">{{ desc }}</p>
		</div>
		<div class="weui-cells__title">选择</div>
		<div class="weui-cells">

			<div class="weui-cell weui-cell_select weui-cell_select-before">
				<div class="weui-cell__hd">
					<select class="weui-select" name="PeriodSelect" v-model="props.data.period">
						<option v-for="item in props.select" v-bind:value="item.val">{{ item.key }}</option>
					</select>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="text" placeholder="请输入股票代码" v-model="props.data.code" />
				</div>
			</div>
		</div>

		<div class="weui-btn-area">
			<a href="javascript:void(0);" @click="queryStock" class="weui-btn weui-btn_plain-primary">确认查询</a>
			<a href="javascript:void(0);" @click="clearStock" class="weui-btn weui-btn_plain-default">内容重置</a>
		</div>

		<div v-show="props.init" class="weui-cells__title">历史价格图</div>
		<div v-show="props.init" class="page__bd">
			<article class="weui-article">
				<div id="stockChart"></div>
			</article>
		</div>

	</div>
</template>
<script>
import { stockURL, stockAPI } from '../api/key'
import { GET, formatDate } from '../api/init'
import { drawStock } from '../api/chart'

export default {
	name: 'stock',
	data() {
		return {
			title: "Stock",
			desc: "股票查询工具",
			props: {
				select: [{
					key: '七天',
					val: 7
				}, {
					key: '一年',
					val: 365
				}, {
					key: '全部',
					val: -1
				}],
				data: {
					period: 7,
					code: ''
				},
				init: false
			}
		}
	},
	computed: {},
	methods: {
		queryStock() {
			let url = `${stockURL}/api/v3/datasets/WIKI/${this.props.data.code}.json?api_key=${stockAPI}`;
			
			if (this.props.data.period != -1 ) {
				let now_date = new Date(),
					end_date_string = formatDate(now_date);
				
				now_date.setDate(now_date.getDate() - this.props.data.period);
				let start_date_string = formatDate(now_date);

				url = `${stockURL}/api/v3/datasets/WIKI/${this.props.data.code}.json?start_date=${start_date_string}&end_date=${end_date_string}&api_key=${stockAPI}`;
			}
			
			GET(url, drawStock('stockChart'));
			this.props.init = true;
		},
		clearStock() {

		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#stockChart {
	width: 100%;
	height: 60vw;
}

.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}
</style>