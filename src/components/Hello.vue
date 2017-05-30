<template>
	<div class="page__bd page__bd_spacing">
		<div class="page__hd">
	        <h1 class="page__title">iNote</h1>
	        <p class="page__desc">{{ msg }}</p>
	    </div>
		<div class="weui-cells__title">输入项</div>

		<div class="weui-cell">
	        <div class="weui-cell__hd"><label class="weui-label">New Item</label></div>
	        <div class="weui-cell__bd">
	            <input class="weui-input" type="text" placeholder="Input new content." v-model="input" @keyup.enter="setItem"/>
	        </div>
	    </div>
		
		<div class="weui-cells__title">列表项</div>
		<div class="weui-cell" v-for="item in items">
			<div class="weui-cell__bd">
				<p v-text="item.name"></p>
			</div>
		</div>

		<div class="weui-cells__title">复选列表项</div>
		<a href="javascript:void(0);"  @click="storeItems" class="weui-btn weui-btn_primary">Result Store</a>
		<a href="javascript:void(0);"  @click="removeItems" class="weui-btn weui-btn_warn">Result Remove</a>
		
	</div>
</template>
<script>
export default {
	name: 'note',
	data () {
		let res = localStorage.note ? JSON.parse( localStorage.getItem('note') ):[];
		return {
			msg: 'Welcome to iNote App',
			items: res,
			input: ''
		}
	},
	methods: {
		setItem() {
			this.items.push({'name': this.input.toString()});
			this.input = '';
		},
		storeItems() {
			let res = JSON.stringify( this.items );
			localStorage.setItem('note', res);
		},
		removeItems() {
			localStorage.setItem('note', '[]');
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
