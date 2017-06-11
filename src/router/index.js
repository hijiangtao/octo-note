import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Note from '@/components/Note'
import Tool from '@/components/Tool'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home
	}, {
		path: '/note',
		name: 'Note',
		component: Note
	}, {
		path: '/tool',
		name: 'Tool',
		component: Tool
	}]
})
