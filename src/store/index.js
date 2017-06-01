/*
	index.js
	@ note store management entry
 */

import Vue from 'vue'
import Vuex from 'vuex'

import note from './modules/note'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		note
	}
})