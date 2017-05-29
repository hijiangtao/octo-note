/**
 * index.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-28 16:39:25
 * @version $Id$
 */

'use strict'

import g from './global'
import template from './index.html'
import './style.css'
import Vue from 'vue'

g.test = 'test'
document.title = 'iNote'
document.body.innerHTML = template

setTimeout(() => {
	document.getElementById('note').innerHTML = 'Changed.'
	// console.log(g)
}, 3000)

g.ins = new Vue({
	el: '#test',
	data: {
		'we': 'string'
	}
})
