<template>
	<div class="page__bd page__bd_spacing">
		<div class="page__hd">
			<h1 class="page__title">{{ title }}</h1>
			<p class="page__desc">{{ desc }}</p>
		</div>
		<div class="weui-cells__title" v-text="cards[0]"></div>
		<div class="weui-cells">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label class="weui-label">事项内容</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="text" placeholder="在此输入事项详情" v-model="input.name" />
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
		<div class="weui-cells__title" v-text="cards[1] + items.length"></div>
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
		<div class="weui-cells__title" v-text="cards[2]"></div>
		<div class="weui-btn-area">
			<a href="javascript:void(0);" @click="addItem" class="weui-btn weui-btn_primary">添加事项</a>
			<a href="javascript:void(0);" @click="delItems" class="weui-btn weui-btn_warn">清空存储</a>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import { getISOString } from '../api/init'

const resetInput = () => {
	return {
		'name': '',
		'date': getISOString(new Date())
	}
}

export default {
	name: 'note',
	data() {
		return {
			input: resetInput()
		}
	},
	computed: {
		...mapState('note', [
			'title',
			'desc',
			'items',
			'cards'
		])
	},
	methods: {
		addItem() {
			this.$store.dispatch('note/ADD_ITEM', this.input)
			this.input = resetInput()
		},
		delItems() {
			this.$store.commit('note/STORE_UPDATE', '-')
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
