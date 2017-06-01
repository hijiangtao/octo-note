/**
 * note.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-06-01 19:47:41
 * @version $Id$
 */

import { ADD_ITEM, DEL_ITEM, STORE_UPDATE } from '../mutation-types'
// import * as getters from '../getters'

let state = {
	title: 'octo-note',
	desc: '欢迎使用 octo-note 记事应用',
	cards: ['待记事项', '待完成事项', '操作选项'],
	// input: {
	// 	name: '',
	// 	date: new Date()
	// },
	items: localStorage.note ? JSON.parse(localStorage.getItem('note')) : [{
		'id': 0,
		'name': '陪女朋友去看变形金刚5',
		'date': '2017-06-26'
	}]
}

const mutations = {
	[DEL_ITEM](state, item) {
		let id = item.id
		state.items.splice(id, 1)
	},
	[ADD_ITEM](state, item) {
		let id = state.length
		state.items.push({
			id: id,
			name: item.name,
			date: item.date
		})
	},
	[STORE_UPDATE](state, type) {
		switch (type) {
		case '-':
			localStorage.removeItem('note');
			state.items = [];
			break
		default:
			if (state.items.length) {
				let res = JSON.stringify(state.items)
				localStorage.setItem('note', res)
			}
		}
	}
}

const actions = {
	[ADD_ITEM]({ commit, item }) {
		commit('ADD_ITEM', item)
		commit('STORE_UPDATE', '+')
	}
}

const getters = {
	GET_TITLE: state => state.title,
	GET_DESC: state => state.desc,
	GET_ITEMS: state => state.items,
	GET_ITEMLEN: ({ items }) => items.length
}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}
