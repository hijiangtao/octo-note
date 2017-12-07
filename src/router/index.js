import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Note from '@/components/Note'
import Tool from '@/components/Tool'
import Info from '@/components/Info'
import Stock from '@/components/Stock'

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
		name: 'Weather',
		component: Tool
	}, {
		path: '/info',
		name: 'Info',
		component: Info
	}, {
		path: '/stock',
		name: 'Stock',
		component: Stock
	}]
})
