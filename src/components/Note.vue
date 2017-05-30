<template>
	<div class="page__bd page__bd_spacing">
		<div class="page__hd">
			<h1 class="page__title">octo-note</h1>
			<p class="page__desc">{{ msg }}</p>
		</div>
		<div class="weui-cells__title" v-text="titles[0]"></div>
		<div class="weui-cells">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label class="weui-label">事项内容</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="text" placeholder="在此输入事项详情" v-model="input.name" @keyup.enter="setItem" />
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label for="" class="weui-label">完成日期</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="date" v-model="input.date">
				</div>
			</div>
		</div>
		<div class="weui-cells__title" v-text="titles[1]"></div>
		<div class="weui-cells">
			<div class="weui-cell" v-for="item in items">
				<div class="weui-cell__bd">
					<p v-text="item.name"></p>
				</div>
				<div class="weui-cell__ft">
					<p v-text="item.date"></p>
				</div>
			</div>
		</div>
		<div class="weui-cells__title" v-text="titles[2]"></div>
		<div class="weui-btn-area">
			<a href="javascript:void(0);" @click="storeItems" class="weui-btn weui-btn_primary">更新存储</a>
			<a href="javascript:void(0);" @click="removeItems" class="weui-btn weui-btn_warn">清空存储</a>
		</div>
	</div>
</template>
<script>
export default {
	name: 'note',
	data() {
		let res = localStorage.note ? JSON.parse(localStorage.getItem('note')) : [{
				'name': '陪女朋友去看变形金刚5',
				'date': '2017-06-26'
			}],
			date = new Date();
		return {
			msg: '欢迎使用 octo-note 记事应用',
			titles: ['待记事项', '待完成事项', '操作选项'],
			items: res,
			input: {
				'name': '',
				'date': date
			}
		}
	},
	methods: {
		setItem() {
			if (!this.input.name || !this.input.date) {
				alert('Not null.');
				return;
			}
			this.items.push({
				'name': this.input.name.toString(),
				'date': this.input.date
			});
			this.input.name = '';

		},
		storeItems() {
			let res = JSON.stringify(this.items);
			localStorage.setItem('note', res);
			this.setItem();
		},
		removeItems() {
			localStorage.removeItem('note');
			this.items = [];
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.page,
body {
	background-color: #f8f8f8;
}

.page__hd {
	padding: 40px;
}
</style>
