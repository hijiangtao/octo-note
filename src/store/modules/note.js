/**
 * note.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-06-01 19:47:41
 * @version $Id$
 */

import { ADD_ITEM, ADD_ONE_ITEM, DEL_ITEM, DEL_ONE_ITEM, STORE_UPDATE, UPDATE_ITEM_TODO } from '../mutation-types'
// import * as getters from '../getters'

let state = {
	title: 'octo-note',
	desc: '欢迎使用 octo-note 记事应用',
	cards: ['待记事项', '待完成事项', '操作选项'],
	// input: {
	// 	name: '',
	// 	date: new Date()
	// },
	items: (() => {
		if (localStorage.count && localStorage.count !== '0') {
			return JSON.parse(localStorage.getItem('note'))
		} else {
			let res = [{
				'id': (new Date()).toString(),
				'name': '陪女朋友去看变形金刚5',
				'date': '2017-06-26',
				'model': {
					'todo': 1
				}
			}]

			localStorage.setItem('count', 1)
			localStorage.setItem('note', JSON.stringify(res))
			return res
		}
	})()
}

const mutations = {
	[DEL_ITEM](state, id) {
		for (let i = state.items.length - 1; i >= 0; i--) {
			if (id === state.items[i].id) {
				state.items.splice(i, 1)
				break
			}
		}
	},
	[ADD_ITEM](state, item) {
		let id = (new Date()).toString()
		state.items.push({
			id: id,
			name: item.name,
			date: item.date,
			model: {
				todo: Number.parseInt(item.model.todo)
			}
		})
	},
	[STORE_UPDATE](state, type) {
		let len = state.items.length

		switch (type) {
		case '-':
			localStorage.removeItem('note')
			localStorage.setItem('count', 0)
			state.items = []
			break
		default:
			if (len != localStorage.getItem('count')) {
				let res = JSON.stringify(state.items)
				localStorage.setItem('note', res)
				localStorage.setItem('count', len)
			}
		}
	},
	[UPDATE_ITEM_TODO](state, {id, todo}) {
		for (let i = state.items.length - 1; i >= 0; i--) {
			if (id === state.items[i].id) {
				state.items[i].model.todo = todo
				break
			}
		}
	}
}

const actions = {
	[ADD_ONE_ITEM]({ commit }, item ) {
		commit('ADD_ITEM', item)
		commit('STORE_UPDATE', '+')
	},
	[DEL_ONE_ITEM]({ commit }, {id} ) {
		commit('DEL_ITEM', id)
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
