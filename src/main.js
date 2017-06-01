import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as init from './api/init'
import 'weui'

Vue.config.productionTip = false

if (!init.detectEnv()) {
	alert('Sorry! No Web Storage support...');
}

const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
app;