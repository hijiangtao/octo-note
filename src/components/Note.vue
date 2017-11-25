<template>
	<div>
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
					<label for="" class="weui-label">预计期限</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="date" v-model="input.date">
				</div>
			</div>
		</div>

		<div class="weui-btn-area">
			<a href="javascript:void(0);" @click="addItem" class="weui-btn weui-btn_plain-primary">确认添加</a>
			<a href="javascript:void(0);" @click="resItem" class="weui-btn weui-btn_plain-default">内容重置</a>
		</div>
		<div class="weui-cells__title" v-text="cards[1] + items.length"></div>
		<transition-group name="list-complete" tag="div" class="weui-cells">
			<div v-for="(item, index) in items" :key="index" class="item-holder">
				<v-touch class="weui-cell" :class="{ 'swipecurrent': currentIndex===index }" @swipeleft="onSwipleLeft(index)" :swipe-options="{ direction: 'horizontal'}" @tap="onTap(index)" tag="div">
					<div class="weui-cell__bd">
						<p v-text="item.name"></p>
					</div>
					<div class="weui-cell__ft">
						<p v-text="item.date"></p>
					</div>
				</v-touch>

				<div class="handle">
					<v-touch class="handle-unread" @tap='change_itemState(item.id, 1)' v-show="item.model.todo==0">标为计划</v-touch>
					<v-touch class="handle-unread" @tap='change_itemState(item.id, 0)' v-show="item.model.todo>0">标为完成</v-touch>
					<v-touch class="handle-del" @tap="delItem(item.id)">删除</v-touch>
				</div>
			</div>
		</transition-group>
		<div class="weui-cells__title" v-text="cards[2]"></div>
		<div class="weui-btn-area">
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
		'date': getISOString(new Date()),
		'model': {
			'todo': 1
		}
	}
}

export default {
	name: 'note',
	data() {
		return {
			input: resetInput(),
			currentIndex: -1
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
			if (this.input.name && this.input.date) {
				this.$store.dispatch('note/ADD_ONE_ITEM', this.input)
				this.resItem()
			}
		},
		delItem(index) {
			console.log('I am going to delete ', index)
			this.$store.dispatch('note/DEL_ONE_ITEM', {
				'id': index
			})
			this.currentIndex = -1
		},
		resItem() {
			this.input = resetInput()
			this.currentIndex = -1
		},
		delItems() {
			this.$store.commit('note/STORE_UPDATE', '-')
			this.currentIndex = -1
		},
		onTap(index) {
			if (this.currentIndex === -1) {
				console.log('tap on me', index)
			}
			this.currentIndex = -1
		},
		onSwipleLeft(index) {
			event.stopPropagation()
			if (this.currentIndex !== -1) {
				this.currentIndex = -1
			} else {
				this.currentIndex = index;
			}
		},
		change_itemState(index, type) {
			this.$store.commit('note/UPDATE_ITEM_TODO', {
				'id': Number.parseInt(index),
				'todo': type
			})
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.item-holder {
	position: relative;
	height: 100%;
}

.handle {
	position: absolute;
    z-index: 1;
    height: 100%;
    right: 0;
    top: 0;
    display: flex;
}

.handle>div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c7c7cc;
    color: #ffffff;
    font-size: 18px;
    padding: 0 12px;
}
.handle .handle-del {
    background-color: #ff3b30;
}

.swipecurrent {
	transform: translate3d(-156px, 0, 0);
    -webkit-transform: translate3d(-156px, 0, 0);
}

.bounce-enter-active {
	animation-name: bounce-in;
	animation-duration: .5s;
}
.bounce-leave-active {
	animation-name: bounce-out;
	animation-duration: .5s;
}


@keyframes bounce-in {
	0% {
		transform: translate3d(0, -100%, 0);
	}
	100% {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes bounce-out {
	100% {
		transform: translate3d(0, -100%, 0);
	}
	0% {
		transform: translate3d(0, 0, 0);
	}
}

.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}
.list-complete-leave-active {
  /*position: absolute;*/
}

.weui-cell {
	transition: all .3s;
	z-index: 2;
	background-color: #FFFFFF;
	overflow: hidden;
	position: relative;
}
</style>
